import React from "react"
import Image from "next/image"
import hero from '@/public/images/hero.png'

export type titles = {
    titleOne?: string,
    titleTwo?: string, 
    titleThree?: string
}

export type heroImageProps = {
    title?: titles,
    strapline?: string, 
    image?: any,
}

const heroImage = {
    src: hero.src, 
    alt: "Hero image"
}

export const Hero = ({
    title,
    strapline,
    image
}:heroImageProps) => {
    <div className="relative">
        <div className="relative bg-size-[5px]">
            <div className="w-full h-full absolute top-0"></div>
            <div className="container">
                <div className="relative min-h-[40vh] mx-auto max-w-2xl pt-10 xl:pt-20 pb-30 space-y-6 lg:max-w-4xl lg:px-12 flex flex-col items-center justify-center">
                    <div className="flex flex-col gap-4 items-center">
                        <div className="text-md leading-6 prose uppercase py-1 px-3 bg-white font-mono italic">
                            {title?.titleOne || title?.titleTwo || title?.titleThree &&
                                <h1 className='text-center font-black'>
                                    {title?.titleOne && <span className='text-primary'>{title?.titleOne}</span>}
                                    {title?.titleTwo && <span className='text-secondary'>{title?.titleTwo}</span>}
                                    {title?.titleThree && <span className='text-tertiary'>{title?.titleThree}</span>}
                                </h1>
                            }
                        </div>
                        <Image 
                            width={500}
                            height={500}
                            src={heroImage?.src}
                            alt={heroImage?.alt}
                        />
                        <p>Weaving magic from the mundane</p>
                    </div>
                </div>
            </div>
        </div>         
    </div>   
}   