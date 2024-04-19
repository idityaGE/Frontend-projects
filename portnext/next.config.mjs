/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: [{ loader: "@svgr/webpack" , options: { icon : true } }],
        })
        return config;
    },
    images: {
        domains: [
            "d3t3ozftmdmh3i.cloudfront.net",
            "s3.amazonaws.com",
            "afr.net",
            "ott.bgea.live",
            "deow9bq0xqvbj.cloudfront.net",
            "d3wo5wojvuv7l.cloudfront.net",
            "episodes.castos.com",
        ],
        remotePatterns: [
            {
                protocol: "http",
                hostname: "**",
            },
            {
                protocol: "https",
                hostname: "**",
            },
        ],
    },
};


export default nextConfig;