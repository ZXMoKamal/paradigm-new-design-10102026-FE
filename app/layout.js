import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import WhatsAppButton from "@/components/shared/whatsAppButton";
import { SEO } from "@/data/SEO";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
    metadataBase: new URL(
        process.env.NEXT_PUBLIC_SITE_URL
    ),

     robots: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-video-preview": -1,
      "max-image-preview": "large",
    },

    title: {
        default: SEO.title,
        template: "%s-"+SEO.title
    },

    description:SEO.description,

    keywords: SEO.keywords,

    authors: [
        {
            name: SEO.fullTitle,
        },
    ],

    creator: SEO.fullTitle,

    applicationName: "Paradigm Company Portfolio",

    icons: {
        icon: SEO.icon,
    },

    openGraph: {
        title: SEO.fullTitle,
        description: SEO.description,

        url: SEO.siteUrl,

        siteName: "Paradigm Company Portfolio",

        images: [
            {
                url: SEO.image,
                width: 230,
                height: 80,
                alt: SEO.fullTitle,
            },
        ],

        locale: SEO.locale,
        type: SEO.type,
    },

    twitter: {
        card: "summary_large_image",
        title: SEO.fullTitle,
        description:SEO.description,

        images: [SEO.image],

        label1: "Written by",
        data1: "admin",
        label2: "Time to read",
        data2: "1 minute",

        creator: "@Paradigm",//need real paradigm twitter account
    },

    alternates: {
        canonical: "/",
        // languages: {
        //     en: "/en",
        //     ar: "/ar",
        // },
    },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
      <Navbar/>
        {children}
        <WhatsAppButton phone="201080034190"/>
        <Footer/>
        </body>
    </html>
  );
}
