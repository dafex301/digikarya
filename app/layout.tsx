import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { getServerSession } from "next-auth";
import { authConfig } from "./api/auth/[[...nextauth]]/authConfig";
import { AuthProvider } from "@/providers/auth-provider";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

const APP_NAME = "DigiKarya";
const APP_DEFAULT_TITLE = "DigiKarya";
const APP_TITLE_TEMPLATE = "%s - DigiKarya";
const APP_DESCRIPTION = "Best DigiKarya in the world!";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authConfig);
  return (
    <html lang="en">
      <AuthProvider session={session}>
        <body className={cn(inter.className, "")}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </AuthProvider>
    </html>
  );
}
