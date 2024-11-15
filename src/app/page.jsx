'use client';
import Cta from '@/app/ui/Cta';
import Div from '@/app/ui/Div';
import FunFact from '@/app/ui/FunFact';
import Hero from '@/app/ui/Hero';
import LogoList from '@/app/ui/LogoList';
import MovingText from '@/app/ui/MovingText';
import SectionHeading from '@/app/ui/SectionHeading';
import PortfolioSlider from '@/app/ui/Slider/PortfolioSlider';
import PostSlider from '@/app/ui/Slider/PostSlider';
import TeamSlider from '@/app/ui/Slider/TeamSlider';
import TestimonialSlider from '@/app/ui/Slider/TestimonialSlider';
import TimelineSlider from '@/app/ui/Slider/TimelineSlider';
import Spacing from '@/app/ui/Spacing';
import VideoModal from '@/app/ui/VideoModal';
import Card from './ui/Card';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react'
import Marquee from 'react-fast-marquee';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useIsMobile } from '@/utils/useIsMobile';
import { useSideHeader } from '@/utils/SideHeaderToggle';
gsap.registerPlugin(useGSAP, ScrollTrigger);
// Hero Social Links
const heroSocialLinks = [
  {
    name: 'Behance',
    links: '/',
  },
  {
    name: 'Twitter',
    links: '/',
  },
];
// FunFact Data
const funfaceData = [
  {
    title: 'Global clients',
    factNumber: '5',
  },
  {
    title: 'Projects Completed',
    factNumber: '10',
  },
  {
    title: 'Cooperative Work',
    factNumber: '5',
  },
  {
    title: 'Code Crafted',
    factNumber: '15',
  },
];
// Portfolio Data
const portfolioData = [
  {
    title: 'Bunzers',
    subtitle: 'See Details',
    href: '/portfolio/Bunzers',
    src: '/portfolio/mob1.png',
  },
  {
    title: 'Fresha',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/portfolio/mob2.png',
  },
  {
    title: 'Brake Time',
    subtitle: 'See Details',
    href: '/portfolio/BrakeTime',
    src: '/portfolio/mob3.png',
  },
  {
    title: 'Plano',
    subtitle: 'See Details',
    href: '/portfolio/Plano',
    src: '/portfolio/mob4.png',
  },



  {
    title: 'Brendanoy',
    subtitle: 'Preview',
    href: '/',
    src: '/portfolio/website/Brendanoy.png',
  },

  {
    title: 'Fizzi',
    subtitle: 'Preview',
    href: '/',
    src: '/portfolio/website/Fizzi-Demo.Vercel.png',
  },
  {
    title: 'Lauf Cycles',
    subtitle: 'Preview',
    href: '/',
    src: '/portfolio/website/Lauf-Cycles.png',
  },
  {
    title: 'Le Baas',
    subtitle: 'Preview',
    href: '/',
    src: '/portfolio/website/Le-Baas.png',
  },
  {
    title: 'Marketing Inspedium',
    subtitle: 'Preview',
    href: '/',
    src: '/portfolio/website/Marketing-Inspedium.png',
  },
  {
    title: 'Model Prime',
    subtitle: 'Preview',
    href: '/',
    src: '/portfolio/website/Model-Prime.Vercel.png',
  },
  {
    title: 'Mudir Dashboard',
    subtitle: 'Preview',
    href: '/',
    src: '/portfolio/website/Mudir-Dashboard-Vercel.png',
  },

  {
    title: 'No Smoking',
    subtitle: 'Preview',
    href: '/',
    src: '/portfolio/logo/No-Smoking-png.png',
  },
  {
    title: 'Oraganic Life',
    subtitle: 'Preview',
    href: '/',
    src: '/portfolio/logo/Oraganic-Life.png',
  },
  {
    title: 'Pixel Brain Design',
    subtitle: 'Preview',
    href: '/',
    src: '/portfolio/logo/Pixel-Brain-Design.png',
  },
  {
    title: 'Western Threadz',
    subtitle: 'Preview',
    href: '/',
    src: '/portfolio/logo/Western-Threadz.png',
  },

];

export default function Home() {
  const isMobile = useIsMobile();
  const lineRef = useRef()
  const { addTitle } = useSideHeader()
  useEffect(() => {
    addTitle("Transforming Your Digital Vision into Reality")


  }, []);


  useGSAP(() => {
    let mm = gsap.matchMedia();
    let md = gsap.matchMedia();
    const line = lineRef.current;

    const length = line.getTotalLength();

    gsap.set(line, {
      strokeDasharray: length
    });

    gsap.fromTo(line,
      {
        strokeDashoffset: length
      }, {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: {
        trigger: ".line",
        start: "top 60%",
        end: "bottom bottom",
        scrub: 1,
      },
    },);


    mm.add("(min-width: 800px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.services-section-1',
          start: isMobile ? 'top 60%' : 'top 100%',
          end: isMobile ? 'bottom 30%' : 'bottom 90%',
          scrub: 4
        },
      });

      tl.from('.services-heading', { x: isMobile ? -30 : -800, opacity: 0, duration: 0.5 });
      tl.from('.card-1', { x: isMobile ? -30 : -400, opacity: 0, duration: 0.5 });
      tl.from('.card-2', { x: isMobile ? -30 : -400, opacity: 0, duration: 0.5 });
      tl.from('.card-3', { x: isMobile ? 30 : 400, opacity: 0, duration: 0.5 });
      tl.from('.card-4', { x: isMobile ? 30 : 400, opacity: 0, duration: 0.5 });

      gsap.from('.marquee', {
        y: isMobile ? 50 : 160,
        opacity: 0.1,
        duration: 1.7,
        scrollTrigger: {
          trigger: '.marquee',
          start: isMobile ? 'top 60%' : 'top 80%',
          end: isMobile ? 'top 50%' : 'top 50%',
          scrub: 1,
        },
      });

      gsap.from('.portfolio', {
        y: isMobile ? 50 : 260,
        opacity: 0.1,
        duration: 1.7,
        delay: 4,
        scrollTrigger: {
          trigger: '.portfolio',
          start: isMobile ? 'top 70%' : 'top 80%',
          end: 'bottom bottom',
          scrub: 4,
        },
      });

      gsap.from('.testimonialSlider', {
        y: isMobile ? 50 : 200,
        opacity: 0,
        duration: 1.6,
        delay: 1,
        scrollTrigger: {
          trigger: '.testimonialSlider',
          start: isMobile ? 'top 90%' : 'top 90%',
          end: isMobile ? 'top 60%' : 'top 40%',
          scrub: 4,
          onEnter: () => gsap.to('.testimonialSlider', { autoAlpha: 1 }),
          onLeaveBack: () => gsap.to('.testimonialSlider', { autoAlpha: 0 }),
        },
      });

      gsap.from('.blog', {
        y: isMobile ? 50 : 200,

        duration: 1.6,
        delay: 1,
        scrollTrigger: {
          trigger: '.blog',
          start: isMobile ? 'top 90%' : 'top 90%',
          end: isMobile ? 'top 60%' : 'top 40%',
          scrub: 2,
          onEnter: () => gsap.to('.blog', { autoAlpha: 1 }),
          onLeaveBack: () => gsap.to('.blog', { autoAlpha: 0 }),
        },
      });
      gsap.to(".shape_4:first-child", {
        rotation: 360,
        duration: 5,
        repeat: -1, // Infinite loop
        ease: "linear",
      });

      // GSAP animation for the second image
      gsap.to(".shape_4:last-child", {
        rotation: 360,
        duration: 7,
        repeat: -1, // Infinite loop
        ease: "linear",
      });
      // gsap.from('.cta', {
      //   y: isMobile ? 50 : 200,
      //   opacity: 0.8,
      //   duration: 1.6,
      //   delay: 1,
      //   scrollTrigger: {
      //     trigger: '.cta',
      //     start: isMobile ? 'top 90%' : 'top 90%',
      //     end: isMobile ? 'top 60%' : 'top 40%',
      //     scrub: 2,
      //     onEnter: () => gsap.to('.cta', { autoAlpha: 1 }),
      //     onLeaveBack: () => gsap.to('.cta', { autoAlpha: 0 }),
      //   },
      // });
    });
  });


  return (
    <>
      {/* Start Hero Section */}
      <Hero
        title="Creativity In <br/>Our Blood Line"
        subtitle="We craft solutions that solve today’s challenges and set you up for tomorrow’s success, delivering results that look as sharp as they perform."
        btnText="Request Estimate"
        btnLink="/contact"
        scrollDownId="#service"
        socialLinksHeading="Follow Us"
        heroSocialLinks={heroSocialLinks}
        bgImageUrl="/images/hero_bg.jpeg"
        videoUrl={"https://res.cloudinary.com/dz8sirg5s/video/upload/v1731529077/a4j8vakcx4fn9rkcajjt.mp4"}
      />

      <div className="container" >
        <FunFact
          variant="cs-type1"
          title="Impressive Milestones"
          subtitle="Did you know? Our journey is marked by impressive achievements that reflect our commitment to innovation and excellence. Here’s what we’ve accomplished so far"
          data={funfaceData}
        />
      </div>
      {/* End FunFact Section */}
  
      <svg className='absolute line xs:hidden lg:block -mt-60  -ml-12' width="2188" height="4409" viewBox="0 0 2188 4431" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 7C115.5 95.1667 435.5 299.449 629 322C895 353 1171.03 81.7382 1348 267C1561.5 490.5 783 974.187 1021.5 1278C1079.98 1352.5 1271 1320.5 1438 1204.5C1605 1088.5 1753 919.336 1911 956C2142 1009.6 2260 1513.5 2119 1710.5C1978 1907.5 1520 2125.5 1055.5 2176.5C632 2223 317.091 2329.5 306 2653C297.034 2914.5 579 3129.99 861 3085C1199.5 3031 1439.16 2958.93 1531.5 3148.5C1692 3478 1531.5 3668.5 1531.5 3756C1531.5 3878.26 1791 3927 1737 4063.5C1708.47 4135.61 1633.76 4172.32 1560 4165.5C1494.14 4159.41 1432.98 4102.61 1366 4088.5C1083.5 4029 1123.32 4316.63 968 4334.5C785.5 4355.5 617.142 4188.75 424 4262.5C341.5 4294 283 4390 278.5 4429.5" stroke="url(#paint0_linear_74_19)" stroke-width="22" ref={lineRef} />
        <defs>
          <linearGradient id="paint0_linear_74_19" x1="5.00002" y1="21.5" x2="230" y2="4422" gradientUnits="userSpaceOnUse">
            <stop stop-color="#090909" />
            <stop offset="0.139177" stop-color="#890A0A" />
            <stop offset="0.24" stop-color="#B10E0E" />
            <stop offset="0.296042" stop-color="#F12B2B" />
            <stop offset="0.330107" stop-color="white" />
            <stop offset="0.369056" stop-color="white" />
            <stop offset="0.451789" stop-color="white" />
            <stop offset="0.512048" stop-color="#890A0A" />
            <stop offset="0.602189" stop-color="#DB3A1D" />
            <stop offset="0.721379" stop-color="#6A0606" />
            <stop offset="0.766154" stop-color="#811010" />
            <stop offset="0.810996" stop-color="#E82A2A" />
            <stop offset="0.893874" stop-color="white" />
            <stop offset="0.919308" stop-color="white" />
            <stop offset="0.937351" stop-color="#F25C25" />
            <stop offset="0.972649" stop-color="#890A0A" />
            <stop offset="0.998686" stop-color="#090909" />
          </linearGradient>
        </defs>
      </svg>
      

      <Spacing lg="120" md="80" />
      <div id="service" className="services-section-1" >
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4 services-heading">
              <SectionHeading
                title="Our Capabilities"
                subtitle="Empowering Your Vision Through Technology."
                subtitle2="We blend innovation with technology to bring your ideas to life. Our expert team specializes in crafting mobile apps and robust backend solutions, ensuring your vision is realized seamlessly."
                btnText="Explore Services"
                btnLink="/"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-8">
              <Div className="row">
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6 card-1">
                  <Card
                    title="Mobile App Mastery"
                    link="/"
                    src="/images/services/2.png"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6 card-2">
                  <Card
                    title="Backend Brilliance"
                    link="/"
                    src="/images/services/1.png"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 card-3">
                  <Card
                    title="App Care"
                    link="/"
                    src="/images/services/3.png"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6 card-4">
                  <Card
                    title="Beyond Apps"
                    link="/"
                    src="/images/services/4.png"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </div>

      <Spacing lg="150" md="50" />
      <div className='marquee xs:flex-col lg:flex-row h-[250px] rounded-xl z-50 relative overflow-hidden'>
        <div className='absolute inset-0' style={{
          background: 'linear-gradient(90deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 80%, rgba(0,0,0,0.5) 100%)',
          opacity: 1
        }}></div>
        <div className='first xs:w-[100%] lg:w-[50%] p-4 relative z-10'>
          <h3 className="xs:text-[24px] lg:text-4xl text-white ">Our Trusted Allies in Technology</h3>
        </div>
        <div className='second xs:w-[100%] relative overflow-hidden'>
          <Marquee className='overflow-hidden'>
            <Image src="/images/client-logos/icone-1.png" width={100} height={100} alt="Partner Logo" style={{ marginLeft: "50px" }} />
            <Image src="/images/client-logos/icone-2.png" width={100} height={100} alt="Partner Logo" style={{ marginLeft: "50px" }} />
            <Image src="/images/client-logos/icone-3.png" width={100} height={100} alt="Partner Logo" style={{ marginLeft: "50px" }} />
            <Image src="/images/client-logos/icone-4.png" width={100} height={100} alt="Partner Logo" style={{ marginLeft: "50px" }} />
            <Image src="/images/client-logos/icone-5.png" width={100} height={100} alt="Partner Logo" style={{ marginLeft: "50px" }} />
            <Image src="/images/client-logos/icone-6.png" width={100} height={100} alt="Partner Logo" style={{ marginLeft: "50px" }} />
            <Image src="/images/client-logos/icone-7.png" width={100} height={100} alt="Partner Logo" style={{ marginLeft: "50px" }} />
            <Image src="/images/client-logos/icone-8.png" width={100} height={100} alt="Partner Logo" style={{ marginLeft: "50px" }} />
          </Marquee>
        </div>
      </div>


      {/* <Spacing lg="150" md="50" /> */}

      {/* Start Portfolio Section */}
      <Spacing lg="70" md="50" />
      <Div className="portfolio overflow-hidden z-[10]">
        <Div className="container">
          <SectionHeading
            title="What We’ve Achieved: Get Inspired!"
            subtitle="Recent Projects"
            variant="cs-style1 text-center"
          />
          <Spacing lg="70" md="45" />
        </Div>
        <PortfolioSlider data={portfolioData} />
      </Div>
      <Spacing lg="150" md="50" />
      {/* End Portfolio Section */}


      {/* Start Testimonial Section */}
      <div className='testimonialSlider z-[100]'>
        <TestimonialSlider />
      </div>
      {/* End Testimonial Section */}
      <Spacing lg="120" md="60" />
      <MovingText text="EMPOWERING VISIONS, BUILDING SUCCESS" />
      {/* Start Blog Section */}
      <Spacing lg="120" md="60" />
      <Div className="cs-shape_wrap_4 blog">
        {/* <Div className="cs-shape_4" style={{ border: '1px solid radial-gradient(circle, rgba(255, 74, 23, 0.8), rgba(153, 44, 14, 0.8))' }}></Div> */}
        <div className="cs-shape_4" style={{ backgroundColor: "transparent" }}>
          <Image className='shape_4' src={"/images/icons/slider-dot.png"} width={100} height={100} />
        </div>
        <div className="cs-shape_4" style={{ backgroundColor: "transparent" }}>
          <Image className='shape_4' src={"/images/icons/slider-dot.png"} width={200} height={200} />
        </div>
        <Div className="container z-[100]">
          <Div className="row z-[100]">
            <Div className="col-xl-4">
              <SectionHeading
                title="Explore Our recent publication"
                subtitle=""
                btnText="View More Blog"
                btnLink="/blog"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-7 offset-xl-1 z-[100]">
              <Div className="cs-half_of_full_width">
                <PostSlider />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <Spacing lg="125" md="70" />
      <Spacing lg="125" md="70" />

      <Div className="container cta ">
        <Cta
          title="Eager to start your next project? <br />Let’s <i>Collaborate!</i> "
          btnText="Book Your Meeting"
          btnLink="/contact"
          bgSrc="/images/BB.png"
          line={true}
        />
      </Div>
      <Spacing lg="125" md="70" />
    </>
  );
}
