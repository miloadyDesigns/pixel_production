// Header.js
'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Div from '../Div';
import Link from 'next/link';
import DropDown from './DropDown';
import ContactInfoWidget from '../Widget/ContactInfoWidget';
import Newsletter from '../Widget/Newsletter';
import SocialWidget from '../Widget/SocialWidget';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { useSideHeader } from '@/utils/SideHeaderToggle';
import Spacing from '../Spacing';

export default function Header({ variant }) {
  const { isOpen, closeSideHeader, openSideHeader } = useSideHeader();
  const [isSticky, setIsSticky] = useState(false);
  const [sideHeaderToggle, setSideHeaderToggle] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);
  const phoneNumber = " (512) 240-9522";

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };


  useEffect(() => {


    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };


    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeSideHeaderHandler = () => {

  };

  return (
    <>
      <header
        className={`cs-site_header cs-style1 text-uppercase ${variant ? variant : ''} cs-sticky_header ${isSticky ? 'cs-sticky_header_active' : ''}`}
      >
        <Div className="cs-main_header">
          <Div className="container">
            <Div className="cs-main_header_in">
              <Div className="cs-main_header_in">
                <Div className="cs-main_header_left">
                  <Link className="cs-site_branding" href="/">
                    <Image
                      src="/images/pixelLogo.png"
                      alt="Logo"
                      width={140} // Adjusted width
                      height={300} // Adjusted height
                      style={{
                        maxWidth: '80%', // Adjust this value as needed
                        height: 'auto', // Maintain aspect ratio
                        transform: 'scale(1.4)', // Scale down the logo
                        transition: 'transform 0.3s ease', // Optional: smooth scaling on hover
                        marginLeft: 40
                      }}
                    />
                  </Link>
                </Div>

              </Div>

              <Div className="cs-main_header_center ">
                <Div className="cs-nav cs-primary_font cs-medium">
                  <ul className="cs-nav_list " style={{ display: `${mobileToggle ? 'block' : 'none'}` }}>
                    {/* <li className="menu-item-has-children text-lg font-semibold">
                      <Link href="/" onClick={() => setMobileToggle(false)}>
                        Home
                      </Link>
                    </li> */}
                    <li className='xs:text-[15px] 2xl:text-lg font-semibold'>
                      <Link href="/about" onClick={() => setMobileToggle(false)}>
                        Behind Creativity
                      </Link>
                    </li>
                    <li className="menu-item-has-children header-text xs:text-[15px] 2xl:text-lg font-semibold">
                      <Link href="/portfolio" onClick={() => setMobileToggle(false)}>
                        Creative Showcase
                      </Link>
                    </li>
                    <li className="menu-item-has-children xs:text-[15px] 2xl:text-lg font-semibold">
                      <Link href="/app-evolution" onClick={() => setMobileToggle(false)}>
                        App Evolution
                      </Link>
                    </li>
                    <li className="menu-item-has-children xs:text-[15px] 2xl:text-lg font-semibold">
                      <Link href="/beyound-apps" onClick={() => setMobileToggle(false)}>
                        Beyond Apps
                      </Link>
                    </li>
                    <li className='xs:text-[15px] 2xl:text-lg font-semibold'>
                      <Link href="/contact" onClick={() => setMobileToggle(false)}>
                        Connect
                      </Link>
                    </li>
                  </ul>

                  <span
                    className={mobileToggle ? 'cs-munu_toggle cs-toggle_active' : 'cs-munu_toggle'}
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <span></span>
                  </span>
                </Div>
              </Div>

              <Div className="cs-main_header_right">
                <Div className="cs-toolbox ml-6">
                  <span
                    className="cs-icon_btn"
                    onClick={handleCallClick}
                  >
                    <Icon icon="mdi:phone" width={24} height={24} color="white" />
                  </span>
                </Div>
                <Div className="cs-toolbox ml-4">
                  <span
                    className="cs-icon_btn"
                    onClick={() => openSideHeader()}
                  >
                    <span className="cs-icon_btn_in">
                      <span />
                      <span />
                      <span />
                      <span />
                    </span>
                  </span>
                </Div>

              </Div>
            </Div>
          </Div>
        </Div>
      </header>

      <Div
        className={isOpen ? 'cs-side_header active' : 'cs-side_header'}
        style={{ overflowY: 'hidden' }}
      >
        <button className="cs-close" onClick={closeSideHeader} />
        <Div className="cs-side_header_overlay" onClick={closeSideHeader} />
        <Div className="cs-side_header_in">
          <Div className="cs-side_header_shape" />
          <Link className="cs-site_branding" href="/">
            <Image
              src="/images/pixelLogo.png"
              alt="Logo"
              width={214} // Adjusted width
              height={280} // Adjusted height
              style={{
                maxWidth: '80%', // Adjust this value as needed
                height: 'auto', // Maintain aspect ratio
                transform: 'scale(1.2)', // Scale down the logo
                transition: 'transform 0.3s ease', // Optional: smooth scaling on hover
                marginLeft: 20
              }}
            />
          </Link>
          <Div className="cs-side_header_box pb-3">
            <p className="cs-side_header_heading">
              Have an idea you want to explore?  <br /> We’d love to collaborate!.
            </p>
          </Div>
          <Div className="cs-side_header_box">
            <p className="cs-side_header_heading pb-4 font-semibold">
              Send a Message
            </p>
            <div className=''>
              <div className=''>
                <form action="#" className="row">
                  <Div className="col-sm-12 pb-2">
                    <label className="cs-primary_color">Full Name*</label>
                    <input type="text" className="cs-form_field" placeholder='Enter name' />
                  </Div>

                  <Div className="col-sm-12 pb-2">
                    <label className="cs-primary_color">Email Address*</label>
                    <input type="text" className="cs-form_field" placeholder='Enter email' />

                  </Div>
                  <Div className="col-sm-12 pb-2">
                    <label className="cs-primary_color">Select Service(s)*</label>
                    <div>
                      <select name="cars" id="cars" className="cs-form_field" defaultValue="">
                        <option value="" disabled className="text-gray-500">Select Service</option>
                        <option value="App Development" className="text-black">App Development</option>
                        <option value="Backend Development" className="text-black">Backend Development</option>
                        <option value="App Maintenance" className="text-black">App Maintenance</option>
                        <option value="Web Development" className="text-black">Web Development</option>
                      </select>
                    </div>

                  </Div>
                  <Div className="col-sm-12">
                    <label className="cs-primary_color">Project Details*</label>
                    <textarea
                      cols="20"
                      rows="5"
                      className="cs-form_field"
                    // placeholder='Start a conversation'
                    ></textarea>
                    <Spacing lg="25" md="25" />
                  </Div>
                  <Div className="col-sm-12">
                    <button className="cs-btn cs-style1">
                      <span>Send Message</span>
                      <Icon icon="bi:arrow-right" />
                    </button>
                  </Div>
                </form>
              </div>
            </div>
          </Div>
          <Div className="cs-side_header_box">
            <Newsletter
              title="Subscribe"
              subtitle="Join our community and let’s create together."
              placeholder="example@gmail.com"
            />
          </Div>
          <Div className="cs-side_header_box">
            {/* <SocialWidget /> */}
          </Div>
        </Div>
      </Div>
    </>
  );
}
