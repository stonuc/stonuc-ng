import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/sections/Footer";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";


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
  title: "Stonuc Technologies",
  description: "Software Consulting and Development",

  applicationName:  "Stonuc Technologies",

  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      noimageindex: true,
    },
  },

  twitter: {
    card: "summary_large_image",
    site: "@stonuctechnologies",
    title: "Stonuc Technologies",
    creator:  "@roxxoncodes",
    description: "Software Consulting and Development",
    images: [
      {
        url: "/images/og1.png",
      },
    ]
  },

  openGraph: {
    url: "/",
    type: "website",
    title: "Stonuc Technologies",
    description: "Software Consulting and Development",
    images: [
      {
        url: "/images/og1.png",
      },
    ],
    siteName:  "Stonuc Technologies",
  },

  authors: [
    {
      name: "Caleb Jimmy",
      url: "https://github.com/CZEJAY",
    },
  ],

  keywords: [
    "software development",
    "software consulting",
    "software architecture",
    "software design",
    "software engineering",
    "software testing",
    "software quality assurance",
    "software project management",
    "software development methodologies",
    "software development frameworks",
    "software development tools",
    "software development resources",
    "software development best practices",
    "software development industry",
    "software development job opportunities",
    "software development company",
    "software development company recruitment",
    "software development company hiring",
    "software development company management",
    "software development company culture",
    "software development company values",
    "software development company benefits",
    "software development company success stories",
    "software development company case studies",
    "software development company market analysis",
    "software development company market trends",
    "software development company market share",
    "software development company competitors",
    "software development company market demand",
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
