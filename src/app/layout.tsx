import type { Metadata, Viewport } from "next";
import { Inter, Manrope, Noto_Sans_SC } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const notoSansSc = Noto_Sans_SC({
  variable: "--font-noto-sc",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "拼豆图纸生成器",
  description: "拼豆图纸生成与编辑工具 - Phase 0",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#f8f9ff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${manrope.variable} ${inter.variable} ${notoSansSc.variable} h-full antialiased`}
    >
      <body className="min-h-full min-w-0 touch-manipulation flex flex-col overflow-x-clip pb-[env(safe-area-inset-bottom,0px)]">
        {children}
      </body>
    </html>
  );
}
