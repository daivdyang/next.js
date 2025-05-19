import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from '@/components/theme/ThemeContext'
import SectionContainer from '@/components/SectionContainer'
import Header from '@/components/navigation/Header'
import Footer from '@/components/navigation/Footer'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Knock Space",
  description: "Knock blogs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} scroll-smooth`}>
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />
      <body
        className={`className="bg-white pl-[calc(100vw-100%)] text-black antialiased dark:bg-gray-950 dark:text-white ${geistMono.variable} p-4`}
      >
        <ThemeProvider>
          <SectionContainer>
            <div className="flex h-screen flex-col justify-between font-sans">
              {/* <SearchProvider> */}
                <Header />
                <main className="mb-auto">{children}</main>
              {/* </SearchProvider> */}
              <Footer />
            </div>
          </SectionContainer>
        </ThemeProvider>
      </body>
    </html>
  );
}
