/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    trailingSlash: true,
    images: {
        // unoptimized:true, // すべての画像を最適化しない
        remotePatterns: [ // 外部の画像を最適化する設定
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com'
            },
        ]
    },
};

export default nextConfig;
