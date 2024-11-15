"use client";
import { useState, useEffect } from 'react';
import Header from '@/app/ui/Header';
import CustomCursor from '@/app/ui/CustomCursor';
import Footer from '@/app/ui/Footer/index';
import 'swiper/css';
import 'swiper/css/pagination';
import './scss/index.scss';
import { Poppins, Open_Sans } from 'next/font/google';
import Head from 'next/head';
import "./globals.css"
import { SideHeaderProvider, useSideHeader } from '@/utils/SideHeaderToggle';


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
  const { title } = useSideHeader();

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <html lang="en">
      <Head>
        <title>{title} - PixelBrainDesign</title>
        <meta property="og:title" content={title} key="title" />
        <meta name="description" content="Elevate your brand with expert Android, iOS, & Web App Development, SEO, PPC, Social Media Marketing, Video Animations & more at PixelBrain Designs!" />
        <meta name="keywords" content="App Development
              Mobile App Development,
              Web Development,
              SEO Services,
              Social Media Marketing,
              Branding & Design,
              Digital Marketing,
              Video Animations,
              PPC Advertising,
              Database Development,
              Mobile app solutions,
              Custom web applications,
              App maintenance services,
              Search Engine Optimization (SEO) strategies,
              Online branding services,
              Digital marketing strategy,
              Web design and development,
              User-friendly mobile apps,
              Business app development,
              Video marketing animations,
              Web development in New York,
              Web development in Los Angeles,
              Web development in Chicago,
              Web development in Miami,
              Web development in San Francisco,
              Web development in Dallas,
              Web development in Seattle,
              Web development in Houston,
              Web development in Austin,
              Web development in Boston,
              Graphic design in New York,
              Graphic design in Los Angeles,
              Graphic design in San Francisco,
              Graphic design in Chicago,
              Graphic design in Miami,
              Graphic design in Dallas,
              Graphic design in Seattle,
              Graphic design in Atlanta,
              Graphic design in Phoenix,
              Graphic design in Portland,
              App development in New York,
              App development in Los Angeles,
              App development in Chicago,
              App development in Miami,
              App development in San Francisco,
              App development in Seattle,
              App development in Houston,
              App development in Dallas,
              App development in Austin,
              App development in Washington DC,
              Marketing services in New York,
              Marketing services in Los Angeles,
              Marketing services in Chicago,
              Marketing services in Miami,
              Marketing services in San Francisco,
              Marketing services in Atlanta,
              Marketing services in Houston,
              Marketing services in Austin,
              Marketing services in Seattle,
              Marketing services in Boston,
              Video animation in New York,
              Video animation in Los Angeles,
              Video animation in Chicago,
              Video animation in Miami,
              Video animation in San Francisco,
              Video animation in Dallas,
              Video animation in Seattle,
              Video animation in Atlanta,
              Video animation in Austin,
              Video animation in Washington DC" />
        <meta name="google-site-verification" content="i3ejs3Wk2ap16Czz_ovWXnG8YQ4SE2WXOfiRUMuxP-Y" />
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-DMRHF3NMNH"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-DMRHF3NMNH');
            `,
          }}
        />
      </Head>
      <body className={`${openSans.variable} ${poppins.variable}`}>
        <Header />
        <CustomCursor />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;

// const metadata = {
//   title: {
//     template: "%s - PixelBrainDesign",
//     default: "Welcome - PixelBrainDesign"
//   }
// };
