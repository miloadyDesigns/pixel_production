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

            <svg className='absolute line xs:hidden lg:block -ml-14 -mt-1 ' width="2273" height="3545" viewBox="0 0 2273 3645" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 2C57 240 469.867 447.745 661.663 477.805C964.668 525.294 1206.5 320.133 1589.88 459.137C1750.97 517.544 1867.47 436.126 1858 332.5C1851.74 263.979 1789.39 258.959 1753.34 320.133C1711 392 1773.32 547.511 2093 693C2412.68 838.489 2227.02 1330.13 2000.27 1357.83C1731.23 1390.7 1760.06 1197.06 1455.06 1218.34C1150.06 1239.61 1294.08 1502.74 1013.5 1602.2C797.204 1678.88 707.506 1619.52 436.894 1619.52C286.784 1619.52 -70.2119 1690.95 29.2268 2092.92C152.821 2592.55 837.072 2203.24 1013.5 2513.4C1130.84 2719.68 745.373 2910.6 745.373 3079.8C745.373 3249 912 3310.71 1155.5 3362C1332.5 3399.28 1576.5 3291 1733.5 3491.5C1783.95 3555.93 1753.5 3642 1753.5 3642" stroke="url(#paint0_linear_82_11)" stroke-width="22" ref={lineRef} />
                <defs>
                    <linearGradient id="paint0_linear_82_11" x1="46.5002" y1="40.5" x2="420.646" y2="4455.06" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#090909" />
                        <stop offset="0.08315" stop-color="#3F0B0B" />
                        <stop offset="0.134803" stop-color="#930B0B" />
                        <stop offset="0.203647" stop-color="#F56464" />
                        <stop offset="0.272172" stop-color="#9F1B11" />
                        <stop offset="0.358127" stop-color="#D0351B" />
                        <stop offset="0.476466" stop-color="#B10E0E" />
                        <stop offset="0.544191" stop-color="#3D0B0B" />
                        <stop offset="0.624069" stop-color="#C42E18" />
                        <stop offset="0.733372" stop-color="#F12727" />
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
