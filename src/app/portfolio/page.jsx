'use client'
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import PageHeading from "@/app/ui/PageHeading";
import Portfolio from "@/app/ui/Portfolio";
import SectionHeading from "@/app/ui/SectionHeading";
import Spacing from "@/app/ui/Spacing";
import { useSideHeader } from "@/utils/SideHeaderToggle";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";

const portfolioData = [
  {
    title: 'Bunzers',
    subtitle: 'See Details',
    href: '/portfolio/Bunzers',
    src: '/portfolio/E-commerce.png',
    category: 'mobile_apps',
  },
  {
    title: 'Fresha',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/portfolio/Fresha.png',
    category: 'mobile_apps',
  },
  {
    title: 'Brake Time',
    subtitle: 'See Details',
    href: '/portfolio/BrakeTime',
    src: '/portfolio/Brake-Time.png',
    category: 'mobile_apps',
  },
  {
    title: 'Plano',
    subtitle: 'See Details',
    href: '/portfolio/Plano',
    src: '/portfolio/Big-Banner.png',
    category: 'mobile_apps',

  },
  {
    title: 'Brendanoy',
    subtitle: 'Preview',
    href: '/',
    src: '/portfolio/website/inner/Brendanoy.png',
    category: 'web_design',
  },

  {
    title: 'Fizzi',
    subtitle: 'Preview',
    href: '/',
    src: '/portfolio/website/inner/Fizzi-Demo.Vercel.png',
    category: 'web_design',
  },
  {
    title: 'Lauf Cycles',
    subtitle: 'Preview',
    href: '/',
    src: '/portfolio/website/inner/Lauf-Cycles.png',
    category: 'web_design',
  },
  {
    title: 'Le Baas',
    subtitle: 'Preview',
    href: '/',
    src: '/portfolio/website/inner/Le-Baas.png',
    category: 'web_design',
  },
  {
    title: 'Marketing Inspedium',
    subtitle: 'Preview',
    href: '/',
    src: '/portfolio/website/inner/Marketing-Inspedium.png',
    category: 'web_design',
  },
  {
    title: 'Model Prime',
    subtitle: 'Preview',
    href: '/',
    src: '/portfolio/website/inner/Model-Prime.Vercel.png',
    category: 'web_design',
  },
  {
    title: 'Mudir Dashboard',
    subtitle: 'Preview',
    href: '/',
    src: '/portfolio/website/inner/Mudir-Dashboard-Vercel.png',
    category: 'web_design',
  },

  {
    title: 'No Smoking',
    subtitle: 'Preview',
    href: '/',
    src: '/portfolio/logo/No-Smoking-png.png',
    category: 'logo_design',
  },
  {
    title: 'Oraganic Life',
    subtitle: 'Preview',
    href: '/',
    src: '/portfolio/logo/Oraganic-Life.png',
    category: 'logo_design',
  },
  {
    title: 'Pixel Brain Design',
    subtitle: 'Preview',
    href: '/',
    src: '/portfolio/logo/Pixel-Brain-Design.png',
    category: 'logo_design',
  },
  {
    title: 'Western Threadz',
    subtitle: 'Preview',
    href: '/',
    src: '/portfolio/logo/Western-Threadz.png',
    category: 'logo_design',
  },
];
const categoryMenu = [
  {
    title: 'Web Design',
    category: 'web_design',
  },
  // {
  //   title: 'Graphic Design',
  //   category: 'ui_ux_design',
  // },
  {
    title: 'Mobile Apps',
    category: 'mobile_apps',
  },
  {
    title: 'Logo Design',
    category: 'logo_design',
  },
];

export default function PortfolioPage() {
  const [active, setActive] = useState('all');
  const [itemShow, setItemShow] = useState(7);
  const { addTitle } = useSideHeader()
  useEffect(() => {
    addTitle("Creative Showcase")
  })
  return (
    <>
      <PageHeading
        title="Portfolio"
        videoSrc="https://res.cloudinary.com/dz8sirg5s/video/upload/v1731529258/kz2gtqa1lajamxbemdzp.mp4"
        pageLinkText="portfolio"
      />
      <Spacing lg="145" md="80" />
      <Div className="container">
        <Div className="cs-portfolio_1_heading">
          <SectionHeading title="Some recent work" subtitle="Our Portfolio" />
          <Div className="cs-filter_menu cs-style1">
            <ul className="cs-mp0 cs-center">
              <li className={active === 'all' ? 'active' : ''}>
                <span onClick={() => setActive('all')}>All</span>
              </li>
              {categoryMenu.map((item, index) => (
                <li
                  className={active === item.category ? 'active' : ''}
                  key={index}
                >
                  <span onClick={() => setActive(item.category)}>
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>
          </Div>
        </Div>
        <Spacing lg="90" md="45" />
        <Div className="row">
          {portfolioData.slice(0, itemShow).map((item, index) => (
            <Div
              className={`${index === 3 || index === 6 ? 'col-lg-8' : 'col-lg-4'
                } ${active === 'all'
                  ? ''
                  : !(active === item.category)
                    ? 'd-none'
                    : ''
                }`}
              key={index}
            >
              <Portfolio
                title={item.title}
                subtitle={item.subtitle}
                href={item.href}
                src={item.src}
                variant="cs-style1 cs-type1"
              />
              <Spacing lg="25" md="25" />
            </Div>
          ))}
        </Div>

        <Div className="text-center">
          {portfolioData.length <= itemShow ? (
            ''
          ) : (
            <>
              <Spacing lg="65" md="40" />
              <span
                className="cs-text_btn"
                onClick={() => setItemShow(itemShow + 3)}
              >
                <span>Load More</span>
                <Icon icon="bi:arrow-right" />
              </span>
            </>
          )}
        </Div>
      </Div>
      <Spacing lg="145" md="80" />
      <Cta
        title="collaborate@pixelbraindesigns.com"
        bgSrc="/images/cta_bg_2.jpeg"
        variant="rounded-0"
      />
    </>
  );
}
