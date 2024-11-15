'use client'
import Image from "next/image";
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import FunFact from "@/app/ui/FunFact";
import PageHeading from "@/app/ui/PageHeading";
import SectionHeading from "@/app/ui/SectionHeading";
import TeamSlider from "@/app/ui/Slider/TeamSlider";
import Spacing from "@/app/ui/Spacing";
import aboutImg4 from '../../../public/images/Smoke-1.png'
import { useSideHeader } from "@/utils/SideHeaderToggle";
import { useEffect, useRef } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(useGSAP, ScrollTrigger);


const funfaceData = [
  {
    title: 'Global Clients',
    factNumber: '5',
  },
  {
    title: 'Project Completed',
    factNumber: '10',
  },
  {
    title: 'Coperative Work',
    factNumber: '5',
  },
  {
    title: 'Code Crafted',
    factNumber: '15',
  },
];

export default function AboutPage() {
  const lineRef = useRef()
  const { addTitle } = useSideHeader()
  useEffect(() => {
    addTitle("Behind Creativity")
  })
  useGSAP(() => {
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

  })
  return (
    <>
      {/* Start Page Heading Section */}
      <PageHeading
        title="Behind Creativity"
        videoSrc="https://res.cloudinary.com/dz8sirg5s/video/upload/v1731529258/kz2gtqa1lajamxbemdzp.mp4"
        pageLinkText="about"
      />
      {/* End Page Heading Section */}
      <svg  className='absolute line xs:hidden lg:block -ml-4 ' width="2131" height="2048" viewBox="0 0 2131 2048" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 7C205.094 132.02 154.056 346.837 360.028 504.362C534.137 637.519 860.264 601.378 1159.42 526.366C1444.94 454.774 1987.58 383.477 2103.01 803.41C2200.6 1158.47 1923.03 1386.34 1657.21 1341.5C1319.31 1284.49 1100.78 1191.98 962 1289C823.215 1386.02 839.353 1560.73 882 1645.5C1045 1969.5 1850.64 1710.03 1905 1980.5C1910.33 2007 1895 2044 1895 2044" stroke="url(#paint0_linear_79_59)" stroke-width="22" ref={lineRef}/>
        <defs>
          <linearGradient id="paint0_linear_79_59" x1="99.6189" y1="-4.21937" x2="329.061" y2="4396.53" gradientUnits="userSpaceOnUse">
            <stop stop-color="#090909" />
            <stop offset="0.0680477" stop-color="#890A0A" />
            <stop offset="0.128921" stop-color="#B10E0E" />
            <stop offset="0.149433" stop-color="white" />
            <stop offset="0.278203" stop-color="white" />
            <stop offset="0.303758" stop-color="#940606" />
            <stop offset="0.40541" stop-color="#F12B2B" />
            <stop offset="0.448682" stop-color="white" />
            <stop offset="0.480182" stop-color="white" />
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
    
      {/* Start About Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-6 col-lg-6">
            <SectionHeading
              title="Your trusted partner for business"
              subtitle=" "
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                At Pixel Brain Designs, we believe that every idea has the potential to become extraordinary. Founded on a passion for innovation and a commitment to excellence, we are more than just a design agency—we are your partners in crafting digital experiences that inspire and engage.
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="40" />
            </SectionHeading>
          </Div>
          <Div className="col-lg-6">

            <SectionHeading
              title="Our Story"
              subtitle=""
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                Born from a collective dream of tech enthusiasts and creative minds, Pixel Brain Designs was established with the goal of merging technology and artistry. Our journey began with a small team fueled by curiosity and ambition, and has since evolved into a vibrant agency that thrives on collaboration and innovation.
                Every project we undertake tells a unique story. From the initial brainstorming session to the final launch, we immerse ourselves in our clients’ visions, ensuring that each solution reflects their brand’s essence. Our diverse team of designers, developers, and strategists brings a wealth of experience and creativity to the table, enabling us to tackle challenges with fresh perspectives and innovative ideas.
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="40" />
            </SectionHeading>
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-6">

            <SectionHeading
              title="Our Mission"
              subtitle=""
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                To empower businesses and individuals by transforming visions into reality through innovative design and technology. We strive to create solutions that not only meet our clients' needs but also exceed their expectations, fostering a sense of collaboration and creativity in every project.
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="40" />
            </SectionHeading>
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-6">
            {/* <Image
              src={aboutImg2}
              alt="About"
              className="w-100 cs-radius_15"
            /> */}
            <SectionHeading
              title="Our Vision"
              subtitle=""
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                To be a beacon of creativity in the digital landscape, setting trends and pushing boundaries. We envision a future where our designs help shape a better world—one that is more connected, engaging, and beautiful.
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="40" />
            </SectionHeading>
            <Spacing lg="25" md="25" />
          </Div>
        </Div>
      </Div>
      <Spacing lg="75" md="55" />
      {/* End About Section */}

      {/* Start Fun Fact Section */}
      <Div className="container">
        <FunFact
          title="Impressive Milestones"
          subtitle="Did you know? Our journey is marked by impressive achievements that reflect our commitment to innovation and excellence. Here’s what we’ve accomplished so far"
          data={funfaceData}
        />
      </Div>
      {/* End Fun Fact Section */}

      {/* Start Why Choose Section */}
      <Spacing lg="100" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-image_layer cs-style1">
              <Div className="cs-image_layer_in">
                <Image
                  src={aboutImg4}
                  alt="About"
                  className="w-100 cs-radius_15"
                />
              </Div>
            </Div>
            <Spacing lg="0" md="40" />
          </Div>
          <Div className="col-xl-5 offset-xl-1 col-lg-6">
            <SectionHeading
              title="Join Us on This Journey"
              subtitle="Why Choose Us"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                As we continue to grow and evolve, we invite you to join us on this exciting journey. Let’s create something amazing together and turn your ideas into reality. At Pixel Brain Designs, your vision is our inspiration, and together, we can push the boundaries of what’s possible.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
                Every project we undertake tells a unique story. From the initial brainstorming session to the final launch, we immerse ourselves in our clients’ visions, ensuring that each solution reflects their brand’s essence. Our diverse team of designers, developers, and strategists brings a wealth of experience and creativity to the table, enabling us to tackle challenges with fresh perspectives and innovative ideas.
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="0" />
            </SectionHeading>
          </Div>
        </Div>
      </Div>
      {/* End Why Choose Section */}

      {/* Start Team Section */}
      {/* <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Awesome team <br/>members"
          subtitle="Our Team"
          variant="cs-style1"
        />
        <Spacing lg="85" md="45" />
        <TeamSlider />
      </Div> */}
      {/* End Team Section */}

      {/* Start CTA Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Cta
          title="Let’s disscuse make <br />something <i>cool</i> together"
          btnText="Apply For Meeting"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
          line={false}
        />
      </Div>
      <Spacing lg="150" md="80" />
      {/* End CTA Section */}
    </>
  );
}
