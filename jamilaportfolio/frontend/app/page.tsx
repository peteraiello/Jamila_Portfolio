import {Suspense} from 'react'
import Link from 'next/link'
import {PortableText} from '@portabletext/react'

import {AllPosts} from '@/app/components/Posts'
import GetStartedCode from '@/app/components/GetStartedCode'
import SideBySideIcons from '@/app/components/SideBySideIcons'
import {settingsQuery} from '@/sanity/lib/queries'
import {sanityFetch} from '@/sanity/lib/live'
// import hero from "../../public/images/hero.png"
import hero from '@/public/images/hero.png'

import Image from 'next/image'

export default async function Page() {

  const {data: settings} = await sanityFetch({
    query: settingsQuery,
  })

  const heroImage = {
    src: hero.src, 
    alt: "Hero image"
  }

  return (
    <>
      <div className="relative">
        <div className="relative bg-size-[5px]">
          <div className="w-full h-full absolute top-0"></div>
          <div className="container">
            <div className="relative min-h-[40vh] mx-auto max-w-2xl pt-10 xl:pt-20 pb-30 space-y-6 lg:max-w-4xl lg:px-12 flex flex-col items-center justify-center">
              <div className="flex flex-col gap-4 items-center">
                <div className="text-md leading-6 prose uppercase py-1 px-3 bg-white font-mono italic">
                  <h1 className='text-center font-black'>
                    <span className='text-primary'>Branding.</span><span className='text-tertiary'> Graphics.</span><span className='text-secondary'> Illustration.</span>
                  </h1>
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
    </>
  )
}
