import React from 'react';
import Slider from 'react-slick';
import Div from '../Div';
import Post from '../Post';
import { Icon } from '@iconify/react';
const postData = [
  {
    url: '/blog/the-ultimate-guide-to-the-mobile-app-development-stack-in-2024-what-to-choose-as-a-developer-or-a-business-owner',
    src: '/blog/features/4.png',
    alt: 'Post',
    date: '24 Nov 2024',
    title: 'The Ultimate Guide to the Mobile App Development Stack in 2024 What to Choose as a Developer or a Business Owner',
  },
  {
    url: '/blog/the-future-of-mobile-app-development-trends-to-watch-in-2024-and-beyond',
    src: '/blog/features/3.png',
    alt: 'Post',
    date: '10 Feb 2022',
    title: 'The Future of Mobile App Development: Trends to Watch in 2024 and Beyond',
  },
  {
    url: '/blog/exploring-the-latest-react-native-0-75-update-key-features-and-improvements',
    src: '/blog/features/9.png',
    alt: 'Post',
    date: '05 Mar 2022',
    title: 'Exploring the Latest React Native 0.75 Update Key Features and Improvements',
  },
  {
    url: '/blog/why-gui-based-backend-like-firebase-and-supabase-are-more-popular-than-code-based-backend-like-spring-boot-and-node-js',
    src: '/blog/features/8.png',
    alt: 'Post',
    date: '07 Mar 2022',
    title: 'Why GUI-Based Backend Like Firebase and Supabase are More Popular Than Code-Based Backend like Spring Boot and Node.js',
  },
  {
    url: '/blog/the-ultimate-guide-to-the-mobile-app-development-stack-in-2024-what-to-choose-as-a-developer-or-a-business-owner',
    src: '/blog/features/10.png',
    alt: 'Post',
    date: '10 Feb 2022',
    title: 'The Ultimate Guide to the Mobile App Development Stack in 2024 What to Choose as a Developer or a Business Owner',
  },

];

export default function PostSlider() {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={`${currentSlide === 0 ? 'slick-disabled' : ''} absolute -bottom-14 border left-12 px-4 py-2  cursor-pointer  z-10 `}
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
    >
      <Icon icon="bi:arrow-left" className="text-white text-2xl" />
    </div>
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={` ${currentSlide === slideCount - 1 ? 'slick-disabled' : ''} absolute -bottom-14 left-32 border px-4 py-2 cursor-pointer  z-10`}
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
    >
      <Icon icon="bi:arrow-right" className="text-white text-2xl" />
    </div>
  );

  /** Slider Settings **/
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="cs-gap-24 space-x-3 ">
      {postData.map((item, index) => (
        <Div key={index}>
          <Post
            url={item.url}
            src={item.src}
            alt={item.alt}
            date={item.date}
            title={item.title}
          />
        </Div>
      ))}
    </Slider>
  );
}
