"use client"
import React, { useEffect, useRef } from 'react'
import PageHeading from "@/app/ui/PageHeading";
import Spacing from '../ui/Spacing';
import Image from "next/image";
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import FunFact from "@/app/ui/FunFact";
import SectionHeading from "@/app/ui/SectionHeading";
import TeamSlider from "@/app/ui/Slider/TeamSlider";
import aboutImg4 from '../../../public/images/about_img_4.jpeg'
import ProcessSlider from '../ui/ProcessSlider';
import { useSideHeader } from '@/utils/SideHeaderToggle';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(useGSAP, ScrollTrigger);
const funfaceData = [
    {
        title: 'Global Happy Clients',
        factNumber: '40',
    },
    {
        title: 'Project Completed',
        factNumber: '50',
    },
    {
        title: 'Team Members',
        factNumber: '245',
    },
    {
        title: 'Digital products',
        factNumber: '550',
    },
];
const page = () => {
    const lineRef = useRef()
    const { addTitle } = useSideHeader()
    useEffect(() => {
        addTitle("App Evolution")
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
                title="App Evolution"
                videoSrc="https://res.cloudinary.com/dz8sirg5s/video/upload/v1731529258/kz2gtqa1lajamxbemdzp.mp4"
                pageLinkText="APP DEVELOPMENT"
            />

            <svg className='absolute line xs:hidden lg:block -ml-10 -mt-1 ' width="2269" height="3625" viewBox="0 0 2269 3625" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M42.5 2.5C91.5 240.5 465.867 391.745 657.663 421.805C960.668 469.294 1202.5 264.133 1585.88 403.137C1746.97 461.544 1863.47 380.126 1854 276.5C1847.74 207.979 1785.39 202.959 1749.34 264.133C1707 336 1769.32 491.511 2089 637C2408.68 782.489 2223.02 1274.13 1996.27 1301.83C1727.23 1334.7 1756.06 1141.06 1451.06 1162.34C1146.06 1183.61 1290.08 1446.74 1009.5 1546.2C793.204 1622.88 703.506 1563.52 432.894 1563.52C282.784 1563.52 -74.2119 1634.95 25.2268 2036.92C148.821 2536.55 833.072 2147.24 1009.5 2457.4C1126.84 2663.68 741.373 2854.6 741.373 3023.8C741.373 3193 908 3254.71 1151.5 3306C1328.5 3343.28 1534.5 3271 1691.5 3471.5C1741.95 3535.93 1711.5 3622 1711.5 3622" stroke="url(#paint0_linear_82_11)" stroke-width="22" ref={lineRef}/>
                <defs>
                    <linearGradient id="paint0_linear_82_11" x1="153.307" y1="46.3456" x2="374.273" y2="4400.15" gradientUnits="userSpaceOnUse">
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

            {/* <svg className='absolute line xs:hidden lg:block ' width="2286" height="3727" viewBox="0 0 2286 3727" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M143 2C180.876 159.307 465.867 389.745 657.663 419.805C960.668 467.294 1359.35 168.13 1728.15 419.805C1869.68 516.39 2005.74 396.794 1996.27 293.168C1990.01 224.646 1906.43 211.36 1891.61 280.801C1864.7 406.943 1948.92 566.724 2173.68 681.489C2398.45 796.253 2223.02 1272.13 1996.27 1299.83C1727.23 1332.7 1756.06 1139.06 1451.06 1160.34C1146.06 1181.61 1290.08 1444.74 1009.5 1544.2C793.204 1620.88 703.506 1561.52 432.894 1561.52C282.784 1561.52 -74.2119 1632.95 25.2268 2034.92C148.821 2534.55 833.072 2145.24 1009.5 2455.4C1126.84 2661.68 741.373 2808.1 741.373 3021.8C741.373 3235.5 1079.52 3248.19 1358.35 3289.42C1603.07 3325.61 1988.5 3347.5 1912.5 3609.5L1872 3724" stroke="url(#paint0_linear_79_61)" stroke-width="22" ref={lineRef} />
                <defs>
                    <linearGradient id="paint0_linear_79_61" x1="153.307" y1="44.3456" x2="374.272" y2="4398.15" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#090909" />
                        <stop offset="0.0736829" stop-color="#890A0A" />
                        <stop offset="0.112182" stop-color="#F12B2B" />
                        <stop offset="0.149192" stop-color="white" />
                        <stop offset="0.256427" stop-color="#B10E0E" />
                        <stop offset="0.292723" stop-color="#9A0808" />
                        <stop offset="0.331551" stop-color="#B10E0E" />
                        <stop offset="0.351158" stop-color="white" />
                        <stop offset="0.521892" stop-color="#890A0A" />
                        <stop offset="0.570003" stop-color="#C71E1E" />
                        <stop offset="0.647824" stop-color="#F12727" />
                        <stop offset="0.788628" stop-color="white" />
                    </linearGradient>
                </defs>
            </svg> */}

            <Spacing lg="90" md="80" />
            <Div className="container">
                <Div className="col-xl-12 col-lg-12 text-center">
                    <SectionHeading
                        title="Crafting Apps that Make an Impact"
                        subtitle=""
                    >
                        <Spacing lg="30" md="20" />
                        <p className="cs-m0 w-[60%] m-auto">
                            At Pixel Brain Designs, our passion is building apps that do more than function—they inspire.
                            From mobile experiences to robust backend support, our team brings innovation to every pixel.
                        </p>
                        <Spacing lg="30" md="30" />
                        {/* <Div className="cs-separator cs-accent_bg"></Div> */}
                    </SectionHeading>
                </Div>
                <Div className="row mt-16">
                    <div className="col-lg-6  flex flex-col justify-center items-center">
                        <SectionHeading
                            title="Android App Development"
                            subtitle="Expanding Boundaries in the Android Ecosystem"
                        >
                            <Spacing lg="30" md="20" />
                            <p className="cs-m0">
                                Our Android app solutions are designed to meet the demands of an ever-evolving market. From
                                concept to launch, we deliver apps that captivate with intuitive design and top-notch
                                performance, ensuring a seamless experience across devices.
                            </p>
                            <Spacing lg="30" md="30" />
                            <Div className="cs-separator cs-accent_bg"></Div>
                            <Spacing lg="25" md="40" />
                        </SectionHeading>
                        <Spacing lg="25" md="25" />
                    </div>
                    <Div className="col-lg-6 flex flex-row justify-center items-center">
                        <Image src={"/images/demo/appdev.svg"} width={400} height={400} />
                        <Spacing lg="25" md="25" />
                    </Div>
                    <Div className="col-lg-6 flex flex-row justify-center items-center">
                        <Image src={"/images/demo/iosDev.svg"} width={400} height={400} />
                        <Spacing lg="25" md="25" />
                    </Div>
                    <div className="col-lg-6  flex flex-col justify-center  items-center">
                        <SectionHeading
                            title="iOS App Development"
                            subtitle="Elevating Experiences for iOS Users"
                        >
                            <Spacing lg="30" md="20" />
                            <p className="cs-m0">
                                We create iOS applications that are as beautiful as they are functional. Our iOS development
                                team builds apps optimized for the Apple ecosystem, ensuring high performance, security, and a
                                user-friendly interface to engage your audience.
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
                            title="Windows Store App Development"
                            subtitle="Optimized for Windows, Built for Success"
                        >
                            <Spacing lg="30" md="20" />
                            <p className="cs-m0">
                                Our Windows Store app development delivers streamlined, responsive applications tailored for
                                Windows devices. We ensure your app stands out, offering intuitive design and functionality that
                                maximizes user engagement within the Windows ecosystem.
                            </p>
                            <Spacing lg="30" md="30" />
                            <Div className="cs-separator cs-accent_bg"></Div>
                            <Spacing lg="25" md="40" />
                        </SectionHeading>
                        <Spacing lg="25" md="25" />
                    </div>
                    <Div className="col-lg-6 flex flex-row justify-center items-center">
                        <Image src={"/images/demo/appStore.svg"} width={400} height={400} />
                        <Spacing lg="25" md="25" />
                    </Div>
                    <Div className="col-lg-6 flex flex-row justify-center items-center">
                        <Image src={"/images/demo/websiteDev.svg"} width={400} height={400} />
                        <Spacing lg="25" md="25" />
                    </Div>
                    <div className="col-lg-6  flex flex-col justify-center  items-center">
                        <SectionHeading
                            title="Web App Development"
                            subtitle="Transforming Ideas into Interactive Web Applications"
                        >
                            <Spacing lg="30" md="20" />
                            <p className="cs-m0">
                                Pixel Brain Designs builds powerful web applications designed for impact. Our web apps
                                perform seamlessly across devices, creating a cohesive experience for your audience that drives
                                results, whether it’s on desktop, tablet, or mobile.
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
                            title="Database Development"
                            subtitle="The Backbone of Your App’s Success"
                        >
                            <Spacing lg="30" md="20" />
                            <p className="cs-m0">
                                A reliable database is essential for smooth app performance. We design robust and scalable
                                databases to keep your data secure and accessible, supporting your app’s functionality without
                                compromising on speed or security.
                            </p>
                            <Spacing lg="30" md="30" />
                            <Div className="cs-separator cs-accent_bg"></Div>
                            <Spacing lg="25" md="40" />
                        </SectionHeading>
                        <Spacing lg="25" md="25" />
                    </div>
                    <Div className="col-lg-6 flex flex-row justify-center items-center">
                        <Image src={"/images/demo/database.svg"} width={400} height={400} />
                        <Spacing lg="25" md="25" />
                    </Div>
                    <Div className="col-lg-6 flex flex-row justify-center items-center">
                        <Image src={"/images/demo/maintenence.svg"} width={400} height={400} />
                        <Spacing lg="25" md="25" />
                    </Div>
                    <div className="col-lg-6  flex flex-col justify-center  items-center">
                        <SectionHeading
                            title="App Maintenance"
                            subtitle="Future-Proofing Your App"
                        >
                            <Spacing lg="30" md="20" />
                            <p className="cs-m0">
                                Our relationship doesn’t end at launch. We offer comprehensive app maintenance services to
                                keep your app up-to-date, secure, and running smoothly, ensuring your app continues to provide
                                value as your business grows.
                            </p>
                            <Spacing lg="30" md="30" />
                            <Div className="cs-separator cs-accent_bg"></Div>
                            <Spacing lg="25" md="40" />
                        </SectionHeading>
                        {/* <Image src={"/images/demo/appdev.svg"} width={400} height={400} /> */}
                        <Spacing lg="25" md="25" />
                    </div>
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
    )
}

export default page
