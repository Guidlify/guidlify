import { Inter as FontSans } from "next/font/google"
import localFont from "next/font/local"

import "@/styles/globals.css"
import { Metadata } from "next"

import { landingConfig } from "@/config/landing"
import { siteConfig } from "@/config/site"
import {
  AuthPageContext,
  AuthPageProvider,
} from "@/lib/context/AuthPageContext"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"
import AuthNav from "@/components/auth-page/auth-nav"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

export const dynamic = "force-dynamic"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

// Font files can be colocated inside of `pages`
const fontHeading = localFont({
  src: "../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
})

interface RootLayoutProps {
  children: React.ReactNode
}

export const metadata: Metadata = {
  metadataBase: null,
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Radix UI",
  ],
  authors: [
    {
      name: "webxguild",
      url: "https://guidlify.com",
    },
  ],
  creator: "webxguild",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.jpg`],
    creator: "@shadcn",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  // manifest: `${siteConfig.url}/site.webmanifest`,
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "flex min-h-screen flex-col bg-background font-sans antialiased",
          fontSans.variable,
          fontHeading.variable
        )}
      >
        <AuthPageProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <header className="container z-40 bg-background">
              <div className="flex h-20 items-center justify-between py-6">
                <MainNav items={landingConfig.mainNav} />
                <AuthNav items={landingConfig.privateNav} />
              </div>
            </header>
            <div className="grow">{children}</div>
            {/* <SiteFooter></SiteFooter> */}
            <TailwindIndicator />
            <Toaster />
          </ThemeProvider>
        </AuthPageProvider>
      </body>
    </html>
  )
}