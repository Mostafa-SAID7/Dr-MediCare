/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Target modern browsers to avoid unnecessary polyfills
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
    // Reduce client-side JavaScript
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
  // Target modern browsers (ES2020+)
  // This removes unnecessary polyfills for Array.at, Array.flat, etc.
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
    // Remove React properties in production
    reactRemoveProperties: process.env.NODE_ENV === 'production',
  },
  // Reduce overhead
  poweredByHeader: false,
  // Compress responses
  compress: true,
  // Optimize production builds
  productionBrowserSourceMaps: false,
  // Reduce bundle size
  modularizeImports: {
    'lucide-react': {
      transform: 'lucide-react/dist/esm/icons/{{member}}',
    },
  },
  // Webpack optimizations
  webpack: (config, { isServer, dev }) => {
    if (!isServer && !dev) {
      // Aggressive bundle splitting for better caching and parallel loading
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          maxInitialRequests: 25,
          minSize: 20000,
          cacheGroups: {
            default: false,
            vendors: false,
            // Framework chunk (React, Next.js)
            framework: {
              name: 'framework',
              test: /[\\/]node_modules[\\/](react|react-dom|next|scheduler)[\\/]/,
              priority: 40,
              enforce: true,
            },
            // Radix UI components
            radix: {
              name: 'radix',
              test: /[\\/]node_modules[\\/]@radix-ui[\\/]/,
              priority: 35,
              minChunks: 1,
              maxSize: 150000,
            },
            // Icons
            icons: {
              name: 'icons',
              test: /[\\/]node_modules[\\/]lucide-react[\\/]/,
              priority: 33,
              maxSize: 100000,
            },
            // UI components
            ui: {
              name: 'ui',
              test: /[\\/]components[\\/]ui[\\/]/,
              priority: 30,
              minChunks: 2,
              maxSize: 150000,
            },
            // Shared components
            components: {
              name: 'components',
              test: /[\\/]components[\\/]/,
              priority: 25,
              minChunks: 2,
              maxSize: 150000,
            },
            // Other vendor libraries
            vendor: {
              name: 'vendor',
              test: /[\\/]node_modules[\\/]/,
              priority: 20,
              maxSize: 200000,
            },
            // Common shared code
            common: {
              name: 'common',
              minChunks: 2,
              priority: 10,
              reuseExistingChunk: true,
              maxSize: 150000,
            },
          },
        },
        // Separate runtime for better caching
        runtimeChunk: {
          name: 'runtime',
        },
        // Better minification
        minimize: true,
        // Module concatenation for smaller bundles
        concatenateModules: true,
        // Remove empty chunks
        removeEmptyChunks: true,
        // Merge duplicate chunks
        mergeDuplicateChunks: true,
        // Flag included chunks
        flagIncludedChunks: true,
      }
      
      // Performance hints
      config.performance = {
        ...config.performance,
        maxAssetSize: 244000, // 244kb
        maxEntrypointSize: 244000,
        hints: 'warning',
      }
      
      // Reduce resolve time - removed date-fns alias as it causes issues
      
      // Exclude source maps in production
      config.devtool = false
    }
    return config
  },
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Headers for better caching
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png|webp|avif)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}

export default nextConfig
