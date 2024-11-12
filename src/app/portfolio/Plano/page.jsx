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
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium voltire doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                            <Spacing lg='10' md='10' />
                            <p>Ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit.</p>
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
