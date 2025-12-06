import commonjs from 'vite-plugin-commonjs'
import eslint from 'vite-plugin-eslint'
import { federation } from '@module-federation/vite'
import path from 'path'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'
import { defineConfig, loadEnv } from 'vite'

import { loadMlrunProxyConfig } from './config/loadDevProxyConfig.js'
import { dependencies } from './package.json'

export default defineConfig(async ({ mode }) => {
  const env = loadEnv(mode, path.resolve(process.cwd()), '')
  const isLibraryBuild = mode === 'library'
  const mlrunProxyConfig = await loadMlrunProxyConfig(mode)

  const federationPlugin =
    env.VITE_FEDERATION === 'true' && !isLibraryBuild
      ? federation({
          filename: 'remoteEntry.js',
          name: 'mlrun',
          exposes: {
            './loadRemoteConfig': './src/loadRemoteConfig.js',
            './app': './src/main.jsx'
          },
          shared: {
            react: { requiredVersion: dependencies.react, singleton: true },
            'react-dom': { requiredVersion: dependencies['react-dom'], singleton: true }
          }
        })
      : null

  // Library build configuration
  const libraryBuildConfig = {
    lib: {
      entry: path.resolve(__dirname, 'src/main.jsx'),
      name: 'MlrunUI',
      fileName: format => `mlrun-ui.${format}`,
      formats: ['es', 'umd']
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react-redux',
        'react-router-dom',
        'redux'
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react-redux': 'ReactRedux',
          'react-router-dom': 'ReactRouterDOM',
          redux: 'Redux'
        }
      }
    },
    target: 'esnext',
    sourcemap: true,
    outDir: 'dist',
    cssCodeSplit: false
  }

  // App build configuration (existing)
  const appBuildConfig = {
    target: 'esnext',
    sourcemap: true,
    outDir: 'build',
    chunkSizeWarningLimit: 3000
  }

  return {
    plugins: [commonjs(), react(), federationPlugin, svgr(), eslint({ failOnError: false })],
    base: env.NODE_ENV === 'production' ? env.VITE_PUBLIC_URL : '/',
    server: {
      proxy: {
        ...mlrunProxyConfig(env)
      },
      fs: {
        strict: false
      },
      hmr: {
        protocol: 'ws'
      },
      port: 3000
    },
    resolve: {
      alias: {
        'igz-controls': path.resolve(
          __dirname,
          'node_modules/iguazio.dashboard-react-controls/dist'
        )
      },
      dedupe: [
        'react',
        'react-dom',
        'classnames',
        'final-form',
        'final-form-arrays',
        'lodash',
        'prop-types',
        'react-final-form',
        'react-final-form-arrays',
        'react-modal-promise',
        'react-transition-group'
      ]
    },
    optimizeDeps: {
      force: true
    },
    build: isLibraryBuild ? libraryBuildConfig : appBuildConfig,
    css: {
      devSourcemap: true,
      preprocessorOptions: {
        scss: {
          sourceMap: true,
          api: 'modern'
        }
      }
    }
  }
})
