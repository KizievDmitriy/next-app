/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, option) {
    config.module.rules.push({
      loader: '@svgr/webpack',
      option: {
        prettier: false,
        svgo: true,
        svgoConfig: {
          plugins: [{ removeViewBox: false }]
        },
        titleProp: true
      },
      test: /\.svg$/,
    });

    return config;
  }
}

module.exports = nextConfig

