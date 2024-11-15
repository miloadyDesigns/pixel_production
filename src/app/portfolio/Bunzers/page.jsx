'use client'
import Button from "@/app/ui/Button";
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import PageHeading from "@/app/ui/PageHeading";
import SectionHeading from "@/app/ui/SectionHeading";
import Spacing from "@/app/ui/Spacing";

export default function page() {
    return (
        <>
            {/* <PageHeading
                title="Portfolio Details"
                videoSrc="/video/blackWhiteVideo.mp4"
                pageLinkText="portfolio-details"
            /> */}
            <Spacing lg='150' md='80' />
            <Div className="container">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline className="cs-radius_15 w-100">
                    <source src={"/portfolio/bunzers.mp4"} type="video/mp4" />
                </video>

                {/* <Image src={imgUrl} alt="Details" placeholder="blur" className="cs-radius_15 w-100" /> */}
                <Spacing lg='90' md='40' />
                <Div className="row">
                    <Div className="col-lg-6">
                        <SectionHeading
                            title='Bunzers Mobile App'
                            subtitle='App Development'
                        >
                            <Spacing lg='40' md='20' />
                            <p>This video showcases an eCommerce mobile app designed to provide a seamless and intuitive shopping experience. Featuring a sleek, user-friendly interface, the app allows users to easily browse through an extensive catalog of products, filter and search items, and view detailed product descriptions and images. The checkout process is secure and efficient, supporting various payment options, including credit/debit cards, digital wallets, and cash on delivery. The app also offers real-time order tracking, ensuring customers can monitor their purchases from order to delivery. Additionally, personalized push notifications keep users informed about promotions, new arrivals, and order updates. Fully optimized for both Android and iOS devices, the app delivers a fast, responsive, and engaging experience, making it the ideal solution for modern online shopping.</p>
                            <Spacing lg='10' md='10' />
                        </SectionHeading>
                    </Div>
                </Div>
                <Spacing lg='65' md='10' />
            </Div>
            <Spacing lg='145' md='80' />
            <Cta
                title='collaborate@pixelbraindesigns.com'
                bgSrc='/images/cta_bg_2.jpeg'
                variant='rounded-0'
            />
        </>
    )
}
