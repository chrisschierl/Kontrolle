// /** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: [
      'localhost',
      'avatars.githubusercontent.com',
      'xsgames.co',
      'files.edgestore.dev',
      'static.vecteezy.com',
      'vecteezy.com',
      'i.scdn.co',
      't4.ftcdn.net',
    ],
  },
  env: {
    NEXT_PUBLIC_CLIENT_URL: 'http://52.57.196.56:3000',
    NEXT_PUBLIC_SERVER_URL: 'http://52.57.196.56:5000',
  },
};

export default nextConfig;
