import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    productionBrowserSourceMaps: false,
    // 隐藏 Turbopack dev indicator（浏览器里的 Next 开发调试按钮）
    devIndicators: false,
    output: "export",
};

export default nextConfig;
