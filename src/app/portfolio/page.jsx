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
  // {
  //   title: 'Airpro System',
  //   subtitle: 'Preview',
  //   href: '#',
  //   src: '/portfolio/website/Airpro-Systems.png',
  //   category: 'web_design',
  // },
  // {
  //   title: 'Art e Gallery',
  //   subtitle: 'Preview',
  //   href: '#',
  //   src: '/portfolio/website/Art-e-Gallery.png',
  //   category: 'web_design',
  // },
  // {
  //   title: 'Catseyepest',
  //   subtitle: 'Preview',
  //   href: '#',
  //   src: '/portfolio/website/inner/Catseyepest.png',
  //   category: 'web_design',
  // },
  // {
  //   title: 'Closet Candy',
  //   subtitle: 'Preview',
  //   href: '#',
  //   src: '/portfolio/website/inner/Closet-Candy.png',
  //   category: 'web_design',
  // },
  // {
  //   title: 'Equinox',
  //   subtitle: 'Preview',
  //   href: '#',
  //   src: '/portfolio/website/inner/Equinox.png',
  //   category: 'web_design',
  // },
  // {
  //   title: 'New Songs of Praise',
  //   subtitle: 'Preview',
  //   href: '#',
  //   src: '/portfolio/website/inner/New-Songs-of-Praise.png',
  //   category: 'web_design',
  // },
  // {
  //   title: 'OraJuice Skin Care',
  //   subtitle: 'Preview',
  //   href: '#',
  //   src: '/portfolio/website/inner/Ora-Juice-Skin-Care.png',
  //   category: 'web_design',
  // },
  // {
  //   title: 'Page Production',
  //   subtitle: 'Preview',
  //   href: '#',
  //   src: '/portfolio/website/inner/Page-Prod-Media.png',
  //   category: 'web_design',
  // },
  // {
  //   title: 'Save Homeless Animals',
  //   subtitle: 'Preview',
  //   href: '#',
  //   src: '/portfolio/website/inner/Save-Homeless-Animals.png',
  //   category: 'web_design',
  // },
  // {
  //   title: 'Shopdiva Dolls Boutique',
  //   subtitle: 'Preview',
  //   href: '#',
  //   src: '/portfolio/website/inner/Shopdiva-Dolls-Boutique.png',
  //   category: 'web_design',
  // },
  // {
  //   title: 'Usdenterprises',
  //   subtitle: 'Preview',
  //   href: '#',
  //   src: '/portfolio/website/inner/Usdenterprises.png',
  //   category: 'web_design',
  // },
  // {
  //   title: 'Big Manny',
  //   subtitle: 'Preview',
  //   href: '#',
  //   src: '/portfolio/logo/inner/Big-Manny-Logo-White.png',
  //   category: 'logo_design',
  // },
  // {
  //   title: 'Diva Dolls',
  //   subtitle: 'Preview',
  //   href: '#',
  //   src: '/portfolio/logo/inner/Diva-Dolls-Logo.png',
  //   category: 'logo_design',
  // },
  // {
  //   title: 'EON',
  //   subtitle: 'Preview',
  //   href: '#',
  //   src: '/portfolio/logo/inner/Eon-Logo-01.png',
  //   category: 'logo_design',
  // },
  // {
  //   title: 'KRW Electric',
  //   subtitle: 'Preview',
  //   href: '#',
  //   src: '/portfolio/logo/inner/KRW-electronic-company.png',
  //   category: 'logo_design',
  // },
  // {
  //   title: 'Manny Lager',
  //   subtitle: 'Preview',
  //   href: '#',
  //   src: '/portfolio/logo/inner/Manny-Lager-Beer-logo-PNG.png',
  //   category: 'logo_design',
  // },
  // {
  //   title: 'Mantastic',
  //   subtitle: 'Preview',
  //   href: '#',
  //   src: '/portfolio/logo/inner/Man-Tastic-logo-Black-PNG.png',
  //   category: 'logo_design',
  // },
  // {
  //   title: 'No Smoking',
  //   subtitle: 'Preview',
  //   href: '#',
  //   src: '/portfolio/logo/inner/No-Smoking-png.png',
  //   category: 'logo_design',
  // },
  // {
  //   title: 'Organic Life',
  //   subtitle: 'Preview',
  //   href: '#',
  //   src: '/portfolio/logo/inner/Oraganic-Life.png',
  //   category: 'logo_design',
  // },
  // {
  //   title: 'Quick Crystal',
  //   subtitle: 'Preview',
  //   href: '#',
  //   src: '/portfolio/logo/inner/Quick-Crystal.png',
  //   category: 'logo_design',
  // },
  // {
  //   title: 'Six Figure Club',
  //   subtitle: 'Preview',
  //   href: '#',
  //   src: '/portfolio/logo/inner/Six-Figure-Club-Logo-PNG.png',
  //   category: 'logo_design',
  // },
  // {
  //   title: 'Vollmer Design Studio',
  //   subtitle: 'Preview',
  //   href: '#',
  //   src: '/portfolio/logo/inner/VDS-Vollmer-Design-Studio.png',
  //   category: 'logo_design',
  // },
  // {
  //   title: 'Western Threadz',
  //   subtitle: 'Preview',
  //   href: '#',
  //   src: '/portfolio/logo/inner/Western-Threadz.png',
  //   category: 'logo_design',
  // },
  // {
  //   title: 'Icon Sportz',
  //   subtitle: 'Preview',
  //   href: '#',
  //   src: '/portfolio/statinoary/inner/Icon-Sportz.png',
  //   category: 'ui_ux_design',
  // },
  // {
  //   title: 'Shift Juices',
  //   subtitle: 'Preview',
  //   href: '#',
  //   src: '/portfolio/statinoary/inner/Shift-Juices-&-Food.png',
  //   category: 'ui_ux_design',
  // },
  // {
  //   title: 'Quality 1',
  //   subtitle: 'Preview',
  //   href: '#',
  //   src: '/portfolio/statinoary/inner/Quality1-Enterprises.png',
  //   category: 'ui_ux_design',
  // },
  // {
  //   title: 'Pezzand Law Group',
  //   subtitle: 'Preview',
  //   href: '#',
  //   src: '/portfolio/statinoary/inner/Pezzand-Law-Group.png',
  //   category: 'ui_ux_design',
  // },

  // {
  //   title: 'Lotus Psychotherapy Services',
  //   subtitle: 'Preview',
  //   href: '#',
  //   src: '/portfolio/statinoary/inner/Lotus-Psychotherapy-Services.png',
  //   category: 'ui_ux_design',
  // },
  // {
  //   title: 'Expert Valet',
  //   subtitle: 'Preview',
  //   href: '#',
  //   src: '/portfolio/statinoary/inner/Expert-Valet.png',
  //   category: 'ui_ux_design',
  // },
  // {
  //   title: 'Dugans Pet Shop',
  //   subtitle: 'Preview',
  //   href: '#',
  //   src: '/portfolio/statinoary/inner/Dugans-Pet-Shop.png',
  //   category: 'ui_ux_design',
  // },


  // {
  //   title: 'Cedar Cove',
  //   subtitle: 'Preview',
  //   href: '#',
  //   src: '/portfolio/socialmedia/inner/Cedar-Cove.png',
  //   category: 'ui_ux_design',
  // },
  // {
  //   title: 'Denterprises',
  //   subtitle: 'Preview',
  //   href: '#',
  //   src: '/portfolio/socialmedia/inner/Denterprises.png',
  //   category: 'ui_ux_design',
  // },

  // {
  //   title: 'Diva Dolls',
  //   subtitle: 'Preview',
  //   href: '#',
  //   src: '/portfolio/socialmedia/inner/Diva-Dolls.png',
  //   category: 'ui_ux_design',
  // },
  // {
  //   title: 'Pretty XO',
  //   subtitle: 'Preview',
  //   href: '#',
  //   src: '/portfolio/socialmedia/inner/Prety-XO.png',
  //   category: 'ui_ux_design',
  // },
  // {
  //   title: 'OraJuice',
  //   subtitle: 'Preview',
  //   href: '#',
  //   src: '/portfolio/socialmedia/inner/Ora-Juice.png',
  //   category: 'ui_ux_design',
  // },
];
const categoryMenu = [
  // {
  //   title: 'Web Design',
  //   category: 'web_design',
  // },
  // {
  //   title: 'Graphic Design',
  //   category: 'ui_ux_design',
  // },
  // {
  //   title: 'Mobile Apps',
  //   category: 'mobile_apps',
  // },
  // {
  //   title: 'Logo Design',
  //   category: 'logo_design',
  // },
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
        videoSrc="/video/blackWhiteVideo.mp4"
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
