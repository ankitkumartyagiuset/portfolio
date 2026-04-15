import type { Metadata } from "next";
import Script from "next/script";
import Footer from "@/components/Footer";
import FloatingBackground from "@/components/FloatingBackground";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ankit Tyagi | Premium Developer Portfolio",
  description:
    "Industry-leading developer portfolio with 3D visuals, premium animations, project showcase, experience timeline, blog, and contact.",
  keywords: ["Developer Portfolio", "Next.js", "Full Stack", "3D Portfolio", "Ankit Tyagi"],
  openGraph: {
    title: "Ankit Tyagi | Premium Developer Portfolio",
    description: "Interactive developer portfolio with 3D elements and full career highlights.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth antialiased" suppressHydrationWarning>
      <body className="min-h-screen bg-slate-50 text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100">
        <Script id="theme-init" strategy="beforeInteractive">
          {`(() => {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const shouldUseDark = savedTheme ? savedTheme === 'dark' : prefersDark;
  document.documentElement.classList.toggle('dark', shouldUseDark);
})();`}
        </Script>
        <ScrollProgress />
        <FloatingBackground />
        <div className="relative z-10 flex min-h-screen flex-col">
          <Navbar />
          <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6 lg:px-8">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
