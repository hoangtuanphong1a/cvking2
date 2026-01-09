/* eslint-disable @typescript-eslint/no-explicit-any */
import type { NextConfig } from 'next';

const isTurbopack = process.env.TURBOPACK === '1';

/** @type {NextConfig} */
const nextConfig: NextConfig = {
  output: "standalone",

  experimental: {
    optimizePackageImports: ['@tanstack/react-query', '@privy-io/react-auth'],
  },
  trailingSlash: true,
  compress: true,
  poweredByHeader: false,

  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: '**' },
      { protocol: 'http', hostname: '**' },
    ],
  },

  // Configure Turbopack to handle .glb files
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
      '*.glb': {
        loaders: ['file-loader'],
        as: '*.glb',
      },
    },
  },

  webpack(config) {
    // SVG handling
    const fileLoaderRule: any = config.module.rules.find((rule: any) =>
      rule.test?.test?.('.svg'),
    );

    if (fileLoaderRule) {
      config.module.rules.push(
        {
          ...fileLoaderRule,
          test: /\.svg$/i,
          resourceQuery: /url/,
        },
        {
          test: /\.svg$/i,
          issuer: fileLoaderRule.issuer,
          resourceQuery: { not: [/url/] },
          use: ['@svgr/webpack'],
        },
      );
      fileLoaderRule.exclude = /\.svg$/i;
    }

    // GLB/GLTF loader (only for Webpack, not Turbopack)
    if (!isTurbopack) {
      config.module.rules.push({
        test: /\.(glb|gltf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'static/models/[name].[hash][ext]',
        },
      });
    }

    return config;
  },

  async headers() {
    return [
      {
        source: '/api/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, s-maxage=300, stale-while-revalidate=600' },
        ],
      },
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/(.*)\\.(png|jpg|jpeg|gif|webp|svg|ico|ttf|woff|woff2|glb|gltf)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
    ];
  },
};

export default nextConfig;