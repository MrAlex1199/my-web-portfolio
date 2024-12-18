import "../global.css";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: {
    default: "Alex Portfolio",
    template: "%s | Alex Portfolio",
  },
  description: "Alex Portfolio",
  openGraph: {
    title: "Alex Burger",
    description:
      "Alex Portfolio",
    url: "http://localhost:3000",
    siteName: "Alex Portfolio",
    locale: "en-US",
    type: "website",
  },
  icons: {
    shortcut: "/favicon.jpg",
  },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({children,}: {children: React.ReactNode;}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        {children}
      </body>
    </html>
  );
}
