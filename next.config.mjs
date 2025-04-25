/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverComponentsHmrCache: false,
    },

    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "vrqgsklnnmjzeltihtqw.supabase.co",
            }
        ]
    },

    async headers() {
        return [
            {
                source: "/embed",
                headers:[
                    {
                     key:"Content-Security-Policy",
                     value:"frame-src 'self' https://www.create.xyz/app/c4a49e08-ad28-4714-84cd-70c0be09a6e8;"
                    },

                ],
            },
        ];
    },
};

export default nextConfig;
