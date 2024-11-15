"use client"
import React, { useEffect, useRef } from 'react'
import PageHeading from "@/app/ui/PageHeading";
import Spacing from '../ui/Spacing';
import Image from "next/image";
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import SectionHeading from "@/app/ui/SectionHeading";
import ProcessSlider from '../ui/ProcessSlider';
import { useSideHeader } from '@/utils/SideHeaderToggle';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(useGSAP, ScrollTrigger);
const page = () => {
    const lineRef = useRef()
    const { addTitle } = useSideHeader()
    useEffect(() => {
        addTitle("Beyond Creativity")
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
            <PageHeading
                title="Beyond Apps"
                videoSrc="https://res.cloudinary.com/dz8sirg5s/video/upload/v1731529258/kz2gtqa1lajamxbemdzp.mp4"
                pageLinkText="OTHER SERVICES"
            />

            
            <svg className='absolute line xs:hidden lg:block -ml-24 -mt-1 ' width="2269" height="3487" viewBox="0 0 2269 3687" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M42.5 2.5C91.5 240.5 465.867 391.745 657.663 421.805C960.668 469.294 1202.5 264.133 1585.88 403.137C1746.97 461.544 1863.47 380.126 1854 276.5C1847.74 207.979 1785.39 202.959 1749.34 264.133C1707 336 1769.32 491.511 2089 637C2408.68 782.489 2223.02 1274.13 1996.27 1301.83C1727.23 1334.7 1756.06 1141.06 1451.06 1162.34C1146.06 1183.61 1290.08 1446.74 1009.5 1546.2C793.204 1622.88 703.506 1563.52 432.894 1563.52C282.784 1563.52 -74.2119 1634.95 25.2268 2036.92C148.821 2536.55 833.072 2147.24 1009.5 2457.4C1126.84 2663.68 741.373 2854.6 741.373 3023.8C741.373 3193 908 3254.71 1151.5 3306C1328.5 3343.28 1628.26 3330.6 1809 3510C1876.5 3577 1816.5 3682.5 1816.5 3682.5" stroke="url(#paint0_linear_83_13)" stroke-width="22" ref={lineRef}/>
                <defs>
                    <linearGradient id="paint0_linear_83_13" x1="153.307" y1="46.3456" x2="374.273" y2="4400.15" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#090909" />
                        <stop offset="0.0736829" stop-color="#890A0A" />
                        <stop offset="0.112182" stop-color="#F12B2B" />
                        <stop offset="0.149192" stop-color="white" />
                        <stop offset="0.256427" stop-color="#B10E0E" />
                        <stop offset="0.294076" stop-color="#9A0808" />
                        <stop offset="0.320295" stop-color="#B10E0E" />
                        <stop offset="0.351158" stop-color="white" />
                        <stop offset="0.521892" stop-color="#890A0A" />
                        <stop offset="0.570003" stop-color="#C71E1E" />
                        <stop offset="0.647824" stop-color="#F12727" />
                        <stop offset="0.788628" stop-color="white" />
                    </linearGradient>
                </defs>
            </svg>
            
            <Spacing lg="90" md="80" />
            <Div className="container">
                <Div className="col-xl-12 m-auto col-lg-12 text-center">
                    <SectionHeading
                        title="Elevate Your Brand with Comprehensive Digital Services"
                        subtitle=""
                    >
                        <Spacing lg="30" md="20" />
                        <p className="cs-m0 w-[70%] m-auto">
                            Pixel Brain Designs is more than an app development partner. We provide a full suite of services
                            to help your business shine, build brand loyalty, and reach new heights. Whatever your digital
                            needs, we have the expertise to bring them to life.
                        </p>
                        <Spacing lg="30" md="30" />
                        {/* <Div className="cs-separator cs-accent_bg"></Div> */}
                    </SectionHeading>
                </Div>
                <Spacing lg="120" md="60" />
                <Div className="row ">
                    <div className="col-lg-6  flex flex-col justify-center items-center">
                        <SectionHeading
                            title="Creative Branding & Design"
                            subtitle=""
                        >
                            <Spacing lg="30" md="20" />
                            <h1 className='text-2xl pb-2 font-semibold'>Graphic Design</h1>
                            <p className="cs-m0">
                                Visual identity is at the heart of your brand. From custom logos and business stationery to
                                impactful advertising materials and unique merchandise, we create designs that resonate, engage,
                                and leave a lasting mark.
                            </p>
                            <Spacing lg="30" md="30" />
                            <Div className="cs-separator cs-accent_bg"></Div>
                            <Spacing lg="25" md="40" />
                        </SectionHeading>
                        <Spacing lg="25" md="25" />
                    </div>
                    <Div className="col-lg-6 flex flex-row justify-center items-center">
                        <Image src={"/images/demo/creative-branding.svg"} width={400} height={400} />
                        <Spacing lg="25" md="25" />
                    </Div>
                    <Div className="col-lg-6 flex flex-row justify-center items-center">
                        <Image src={"/images/demo/content-thats-connect.svg"} width={400} height={400} />
                        <Spacing lg="25" md="25" />
                    </Div>
                    <div className="col-lg-6  flex flex-col justify-center  items-center">
                        <SectionHeading
                            title="Content That Connects"
                            subtitle=""
                        >
                            <Spacing lg="30" md="20" />
                            <h1 className='text-2xl pb-2 font-semibold'>Content Creation</h1>
                            <p className="cs-m0">
                                Crafting stories that captivate—whether through blog articles, social media visuals, or
                                multimedia—is our specialty. Our content team works closely with you to communicate your
                                brand’s story in a way that connects authentically with your audience.
                            </p>
                            <Spacing lg="30" md="30" />
                            <Div className="cs-separator cs-accent_bg"></Div>
                            <Spacing lg="25" md="40" />
                        </SectionHeading>
                        {/* <Image src={"/images/demo/appdev.svg"} width={400} height={400} /> */}
                        <Spacing lg="25" md="25" />
                    </div>
                    <div className="col-lg-6  flex flex-col justify-center items-center">
                        <SectionHeading
                            title="Your Brand’s Digital Home"
                            subtitle=""
                        >
                            <Spacing lg="30" md="20" />
                            <h1 className='text-2xl pb-2 font-semibold'>Website Development</h1>
                            <p className="cs-m0">
                                A website is more than an online presence; it’s your digital storefront. We build visually
                                engaging, user-friendly, and conversion-focused websites tailored to reflect your brand and
                                deliver a seamless experience across all devices.
                            </p>
                            <Spacing lg="30" md="30" />
                            <Div className="cs-separator cs-accent_bg"></Div>
                            <Spacing lg="25" md="40" />
                        </SectionHeading>
                        <Spacing lg="25" md="25" />
                    </div>
                    <Div className="col-lg-6 flex flex-row justify-center items-center">
                        <Image src={"/images/demo/your-digital.svg"} width={400} height={400} />
                        <Spacing lg="25" md="25" />
                    </Div>
                    <Div className="col-lg-6 flex flex-row justify-center items-center">
                        <Image src={"/images/demo/powering-online.svg"} width={400} height={400} />
                        <Spacing lg="25" md="25" />
                    </Div>
                    <div className="col-lg-6  flex flex-col justify-center  items-center">
                        <SectionHeading
                            title="Powering Online Growth"
                            subtitle=""
                        >
                            <Spacing lg="30" md="20" />
                            <h1 className='text-2xl pb-2 font-semibold'>Social Media Marketing</h1>
                            <p className="cs-m0">
                                Your brand’s voice deserves to be heard. We handle end-to-end social media management,
                                building strategies that increase engagement and cultivate meaningful connections with your
                                audience.
                            </p>
                            <Spacing lg="30" md="20" />
                            <h1 className='text-2xl pb-2 font-semibold'>Search Engine Optimization (SEO)</h1>
                            <p className="cs-m0">
                                Our SEO solutions are tailored to amplify your digital presence, improve search rankings, and
                                drive targeted traffic to your website, fostering long-term growth and visibility
                            </p>
                            <Spacing lg="30" md="20" />
                            <h1 className='text-2xl pb-2 font-semibold'>Pay-Per-Click (PPC) Advertising</h1>
                            <p className="cs-m0">
                                For fast, impactful results, our data-driven PPC campaigns are optimized to get your brand
                                noticed, bringing you closer to your goals with strategic, cost-effective ads.
                            </p>
                            <Spacing lg="30" md="30" />
                            <Div className="cs-separator cs-accent_bg"></Div>
                            <Spacing lg="25" md="40" />
                        </SectionHeading>
                        {/* <Image src={"/images/demo/appdev.svg"} width={400} height={400} /> */}
                        <Spacing lg="25" md="25" />
                    </div>
                    <div className="col-lg-6  flex flex-col justify-center items-center">
                        <SectionHeading
                            title="Engaging Visual Storytelling"
                            subtitle=""
                        >
                            <Spacing lg="30" md="20" />
                            <h1 className='text-2xl pb-2 font-semibold'>Video Animations</h1>
                            <p className="cs-m0">
                                Dynamic storytelling through video animation can transform how your audience interacts with
                                your brand. From explainer videos to product demos and social animations, our team crafts
                                compelling visuals that simplify complex messages and engage viewers in a unique way.
                            </p>
                            <Spacing lg="30" md="30" />
                            <Div className="cs-separator cs-accent_bg"></Div>
                            <Spacing lg="25" md="40" />
                        </SectionHeading>
                        <Spacing lg="25" md="25" />
                    </div>
                    <Div className="col-lg-6 flex flex-row justify-center items-center">
                        <Image src={"/images/demo/engaging-visual.svg"} width={400} height={400} />
                        <Spacing lg="25" md="25" />
                    </Div>

                </Div>
            </Div>

            <Spacing lg="75" md="55" />

            {/* Start Fun Fact Section */}
            <Div className="container">
                <SectionHeading
                    title="Our Process"
                    subtitle="Project Lifecycle"
                    variant="cs-style1"
                />
                <ProcessSlider />
            </Div>

            {/* Start CTA Section */}
            <Spacing lg="150" md="80" />
            <Div className="container">
                <Cta
                    title="Let’s disscuse make <br />something <i>cool</i> together"
                    btnText="Apply For Meeting"
                    btnLink="/contact"
                    bgSrc="/images/cta_bg.jpeg"
                />
            </Div>
            <Spacing lg="150" md="80" />
            {/* End CTA Section */}
        </>
    )
}

export default page
