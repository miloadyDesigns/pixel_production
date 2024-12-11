import Header from '@/app/ui/Header';
import CustomCursor from '@/app/ui/CustomCursor';
import Footer from '@/app/ui/Footer/index';
import 'swiper/css';
import 'swiper/css/pagination';
import './scss/index.scss';
import { Poppins, Open_Sans } from 'next/font/google';
import "./globals.css"
import { SideHeaderProvider } from '@/utils/SideHeaderToggle';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
import Script from "next/script";
export const metadata = {
  title: {
    template: "%s - PixelBrainDesign",
    default: "Transforming Your Digital Vision into Reality"
  },
  description: "Pixel Brain Designs offers innovative design solutions for businesses. Creative web design, branding, and digital marketing services.",
  keywords: "Creative web design services, Affordable branding solutions, Small business digital marketing, Custom logo design near me, Web design for startups, SEO-friendly website design, Local web design services, Affordable graphic design services, Custom website design for businesses, Digital branding",
  verification: {
    other: {
      "google-site-verification": "i3ejs3Wk2ap16Czz_ovWXnG8YQ4SE2WXOfiRUMuxP-Y",
    },
  },
};
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--primary-font',
});
const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--secondary-font',
});
const RootLayout = ({ children }) => {
  return (
    <SideHeaderProvider>
      <InnerLayout>{children}</InnerLayout>
    </SideHeaderProvider>
  );
};
const InnerLayout = ({ children }) => {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "LocalBusiness",
    "name": "Pixel Brain Designs",
    "address": "Austin, TX 78731, USA",
    "image": "https://pixelbraindesigns.com/_next/image?url=%2Fimages%2FpixelLogo.png&w=256&q=75",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "ratingCount": "120",
      "reviewCount": "50"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "validFrom": "2001-09-30T19:00:00.000Z",
      "validThrough": "2001-09-30T19:00:00.000Z",
      "opens": "10:00",
      "closes": "01:00",
      "dayOfWeek": [
        "Monday"
      ]
    },
    "telephone": "512-616-6176",
    "priceRange": "",
    "menu": "https://pixelbraindesigns.com/portfolio, https://pixelbraindesigns.com/portfolio , https://pixelbraindesigns.com/app-evolution, https://pixelbraindesigns.com/beyound-apps",
    "servesCuisine": "",
    "url": "https://pixelbraindesigns.com/"
  }

  return (
    <html lang="en">
      <head>
        <meta name="robots" content="index, follow" />
        {/* Canonical Tag */}
        <link rel="canonical" href="https://pixelbraindesigns.com/" />
        {/* Author Meta Tag */}
        <meta name="author" content="PixelBrainDesigns" />
        {/* Publisher Meta Tag */}
        <meta name="publisher" content="PixelBrainDesigns" />
      </head>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <body className={``}>
        <Header />
        <CustomCursor />
        {children}
        <Footer />
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-59N55WVZ"
          height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
      </body>
      <GoogleAnalytics gaId='G-DMRHF3NMNH' />
      <GoogleTagManager gtmId="GTM-59N55WVZ" />
    </html>
  );
};

export default RootLayout;


