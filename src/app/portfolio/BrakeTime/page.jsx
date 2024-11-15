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
                    <source src={"/portfolio/braketime.mp4"} type="video/mp4" />
                </video>

                {/* <Image src={imgUrl} alt="Details" placeholder="blur" className="cs-radius_15 w-100" /> */}
                <Spacing lg='90' md='40' />
                <Div className="row">
                    <Div className="col-lg-6">
                        <SectionHeading
                            title='Brake Time Mobile App'
                            subtitle='App Development'
                        >
                            <Spacing lg='40' md='20' />
                            <p>This video showcases Brake Time, a comprehensive mobile app designed for efficient inventory and store management. The app provides businesses with a streamlined solution for managing stock, placing orders with warehouses, and tracking inventory across multiple locations. With its intuitive interface, Brake Time allows store managers to easily place orders for new stock, monitor inventory levels in real-time, and ensure that shelves are always stocked with the right products. The app features multiple panels for different user roles, including store managers, warehouse staff, and admins, each offering tailored functionality to enhance operational efficiency. Additionally, Brake Time includes a claims feature that allows users to submit and track product claims for damaged or missing items, ensuring smooth resolution of issues. Fully optimized for both Android and iOS, Brake Time simplifies inventory control, order management, and communication between stores and warehouses, making it an essential tool for businesses looking to streamline their supply chain and improve operational workflows.</p>
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
