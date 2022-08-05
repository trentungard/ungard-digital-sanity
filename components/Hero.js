import { DecorativeBlob } from "./DecorativeBlob"

export default function Hero() {
    return(
        <div className="py-32">
            <div className="w-9/12 max-w-screen-xl w-full">
                <div className="flex justify-between items-center gap-10">
                    <div>
                        <h2 className="text-xl lg:text-8xl lg:leading-none font-bold text-ungard-blue">Getting Online Has Never Been So Easy.</h2>
                        <p className="my-10 text-4xl text-gray-600">You have a business that needs brought online, and we have the expertise to help do it.</p>
                        <button>Get Started</button>
                    </div>
                    <div>
                        <DecorativeBlob />
                    </div>
                </div>
            </div>
        </div>
    )
}