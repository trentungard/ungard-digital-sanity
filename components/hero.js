import { DecorativeBlob } from "./decorative-blob"
import { ContentContainer } from "./content-container";
import ArrowRight from "./icons/ArrowRight"
import blobOne from '../public/blob-one.svg';

export default function Hero() {
    return(
        <div className="py-12 xl:py-24 bg-hero-img bg-cover xl:bg-none">
            <ContentContainer>
                <div className="flex flex-column xl:flex-row gap-14 items-center">
                    <div className="bg-ungard-blue py-12 px-7 xl:bg-transparent xl:p-0">
                        <h2 className="text-4xl lg:text-8xl lg:leading-none font-bold text-white xl:text-primary underline underline-offset-6 ungard-blue-underline">Getting Online Has Never Been So Easy.</h2>
                        <p className="my-10 text-4xl text-white xl:text-primary">You have a business that needs brought online, and we have the expertise to help you do it.</p>
                        <button className="button flex gap-3 button-lg bg-white xl:bg-ungard-blue xl:text-white">
                            <span>Get Started</span>
                            <ArrowRight width={20}/>
                        </button>
                    </div>
                    <div className="hidden xl:block">
                        <img src={blobOne.src} width='1000px' />
                    </div>
                </div>
            </ContentContainer>
        </div>
    )
}