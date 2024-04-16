// "use client";
import "./globals.css";
import { getServerSession } from "next-auth";
import AuthProvider from "@/containers/auth-provider";
import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { ExpendableSidebarProvider } from "@/components/use-sidebar";
import { authOptions } from "@/const/authOptions";
import localFont from "next/font/local";
import { redirect, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import ThemeProvider from "@/containers/theme-provider";
// import { getLoginStatus } from "services/auth";
interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

const fontSans = localFont({
  src: "./Inter-VariableFont.ttf",

  display: 'swap',
  // weight: ["400"],
  variable: '--font-sans',
})


const fontHandwriting = localFont({
  src: "./Kalam-Regular.ttf",
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Invincix Dashboard",
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const session = await getServerSession(authOptions);

  return (
    <html suppressHydrationWarning className={`${fontSans.variable} ${fontHandwriting.variable}`}>
      <head></head>

      <body className={cn("min-h-screen font-sans antialiased")}>
        <AuthProvider session={session}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
          >
            <ExpendableSidebarProvider>
              {children}
              <Toaster />
            </ExpendableSidebarProvider>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
