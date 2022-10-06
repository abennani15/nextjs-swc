const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
	experimental: {
		swcPlugins: [
			[
				"swc-plugin-coverage-instrument",
				{
					coverageVariable: "__coverage__",
					esModules: true,
					debug: true,
					instrumentLog: {
						level: "info"
					}
				}
			]
		]
	},
	webpack: (webpackConfig) => {
		const config = webpackConfig;

		config.resolve.alias.components = path.join(__dirname, "src/adapters/primary/components");
		config.resolve.alias.hooks = path.join(__dirname, "src/adapters/primary/hooks");

		return config;
	}
}

module.exports = nextConfig
