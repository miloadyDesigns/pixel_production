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
                    <source src={"/portfolio/plano.mp4"} type="video/mp4" />
                </video>

                {/* <Image src={imgUrl} alt="Details" placeholder="blur" className="cs-radius_15 w-100" /> */}
                <Spacing lg='90' md='40' />
                <Div className="row">
                    <Div className="col-lg-6">
                        <SectionHeading
                            title='Plano Mobile App'
                            subtitle='App Development'
                        >
                            <Spacing lg='40' md='20' />
                            <p>This video showcases Plano, a mobile app designed to enhance the salon experience by offering a seamless way to book and manage beauty services. Plano features a clean, user-friendly interface that allows customers to easily browse through a variety of salon treatments, including haircuts, styling, facials, manicures, and more. Users can view detailed service descriptions, check the availability of their preferred stylists or technicians, and quickly book appointments with just a few taps. The app also offers secure payment options for a smooth checkout process. Real-time notifications keep users informed with appointment reminders, confirmations, and special offers. Fully optimized for both Android and iOS devices, Plano provides a fast, responsive, and convenient platform, making it easier than ever for customers to manage their salon visits and enjoy a premium beauty experience.</p>
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
