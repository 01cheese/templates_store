/** @type {import('next').NextConfig} */
const nextConfig = {
  // Разрешаем HMR для локального IP (чтобы тестить с телефона или другого ПК)
  allowedDevOrigins: ['192.168.0.30'],
};

export default nextConfig;