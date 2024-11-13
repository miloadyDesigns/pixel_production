'use client'

import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import PageHeading from "@/app/ui/PageHeading";
import Pagination from "@/app/ui/Pagination";
import PostStyle2 from "@/app/ui/Post/PostStyle2";
import Sidebar from "@/app/ui/Sidebar.jsx/index.jsx";
import Spacing from "@/app/ui/Spacing";
import { useSideHeader } from "@/utils/SideHeaderToggle";
import { useEffect } from "react";

const postData = [
  {
    thumb: '/blog/features/10.png',
    title: 'Understanding Mobile Application Development: A Comprehensive Guide',
    subtitle:
      'Mobile applications are considered crucial to the flow of the digital environment as they help businesses to address users and optimize processes. This article focuses on aspects such as what mobile application development is, the different platforms available, the right practices to follow, and the many issues that manufacturers face in the course of fostering an effective application.',
    date: '24 Mar 2024',
    category: 'Tech',
    categoryHref: '/blog',
    href: '/blog/understanding-mobile-application-development-a-comprehensive-guide',
  },
  {
    thumb: '/blog/features/3.png',
    title: 'The Future of Mobile App Development: Trends to Watch in 2024 and Beyond',
    subtitle:
      "Mobile app improvement continues to conform hastily, with present day technologies and advancements shaping the future. As the arena turns into an increasing number of linked and reliant on cell gadgets, it's vital to stay knowledgeable about the contemporary traits in cell app improvement. In 2024 and past, new tendencies together with 5G, AI integration, and go-platform improvement tools will considerably impact the cell app landscape. This article explores those key traits and their implications for software development services, especially cellular app improvement.",
    date: '05 Mar 2022',
    category: 'Tech',
    categoryHref: '/blog',
    href: '/blog/the-future-of-mobile-app-development-trends-to-watch-in-2024-and-beyond',
  },
  {
    thumb: '/blog/features/9.png',
    title: 'Exploring the Latest React Native 0.75 Update Key Features and Improvements',
    subtitle:
      'New updates have been recently launching actively in React Native for developers to have strong tools, excellent performance, and seamless integration. In this post we highlight what is new in the 0.75 release of React Native, including new features, speed improvements, and compatibility changes. In this article, let’s look at what has been added in React Native 0.75: TypeScript, animation, reanimated, bridge elimination, native compatibility with Kotlin, Objective-C, Java, and Swift.',
    date: '04 Mar 2022',
    category: 'Tech',
    categoryHref: '/blog',
    href: '/blog/exploring-the-latest-react-native-0-75-update-key-features-and-improvements',
  },
  {
    thumb: '/blog/features/4.png',
    title: 'The Ultimate Guide to the Mobile App Development Stack in 2024 What to Choose as a Developer or a Business Owner',
    subtitle:
      'As the world becomes mobile first, choosing the right technology for mobile apps is the key for companies that want to develop powerful, secure, and scalable mobile applications. This is particularly relevant if you’re designing an Android app or an iOS app or even a hybrid crossover of both. Each of the two kinds of stacks that you choose can get in between or affect quite a lot of things ranging from the actual function of the application to the actual cost of developing such an application. This tutorial covers different mobile app development stacks where you will find how to choose the right technology for the mobile application using Android, iOS, and Cross-Platform Solutions.',
    category: 'Tech',
    date: '05 Mar 2022',
    categoryHref: '/blog',
    href: '/blog/the-ultimate-guide-to-the-mobile-app-development-stack-in-2024-what-to-choose-as-a-developer-or-a-business-owner',
  },
  {
    thumb: '/blog/features/8.png',
    title: 'Why GUI- Based Backend Like Firebase and Supabase are More Popular Than Code - Based Backend like Spring Boot and Node.js',
    subtitle:
      "In today’s fast developing world, developers want their work to be easier, faster so they can concentrate more on building better and more feature rich applications rather than having to spend a lot of time managing back ends. This reason has contributed significantly to the increased adoption of the new GUI-based backends such as Firebase and Supabase that come with services, real-time support, and friendliness compared to APIs. But what are these platforms more preferable compared to other code based backends such as Spring Boot, Node.js and so on? Let's break it down.",
    category: 'Tech',
    date: '05 Mar 2022',
    categoryHref: '/blog',
    href: '/blog/why-gui-based-backend-like-firebase-and-supabase-are-more-popular-than-code-based-backend-like-spring-boot-and-node-js',
  },
];

export default function BlogPage() {
  const { addTitle } = useSideHeader()
  useEffect(() => {
    addTitle("Blogs")
  })
  return (
    <>
      <PageHeading
        title="Our Blog"
        videoSrc="/video/blackWhiteVideo.mp4"
        pageLinkText="Blog"
      />
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-8">
            {postData.map((item, index) => (
              <Div key={index}>
                <PostStyle2
                  thumb={item.thumb}
                  title={item.title}
                  subtitle={item.subtitle}
                  date={item.date}
                  category={item.category}
                  categoryHref={item.categoryHref}
                  href={item.href}
                />
                {postData.length > index + 1 && <Spacing lg="95" md="60" />}
              </Div>
            ))}
            <Spacing lg="60" md="40" />
            {/* <Pagination /> */}
          </Div>
          <Div className="col-xl-3 col-lg-4 offset-xl-1">
            <Spacing lg="0" md="80" />
            {/* <Sidebar /> */}
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Cta
          title="Let’s disscuse make <br />something <i>cool</i> together"
          btnText="Apply For Meeting"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
    </>
  );
}
