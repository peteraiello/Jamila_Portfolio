
'use client'
import Link from 'next/link'
import {settingsQuery} from '@/sanity/lib/queries'
import {sanityFetch} from '@/sanity/lib/live'
import { menuData } from '../data/header-data'
import Image from "next/image"
import logo from "../../public/images/logo.svg"
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import classNames from 'classnames';

export default function Header() {

  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleClicked = () => {
    return setToggleMenu(!toggleMenu);
  }

  return (
    <>
    <header className="fixed z-50 h-24 inset-0 bg-primary flex items-center backdrop-blur-lg">
      <div className="container py-6 px-2 sm:px-6">
        <div className="flex items-center justify-between gap-5">
          <div className='max-w-[187px]'>
            <Link className="flex items-center gap-2" href="/">
              <Image 
                width={500}
                height={500}
                src={logo.src}
                alt="Jamila Akhtar Work Portfolio"
              />
            </Link>
          </div>
          <a href="#" className='block lg:hidden' onClick={() => toggleClicked()}>
            <div className='w-[44px]'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"/></svg>
            </div>
          </a>
          {/* Desktop nav start */}
          <nav className='desktop nav hidden lg:block'>          
            {Boolean(menuData && menuData?.length > 0) &&
              <ul
                role="list"
                className="flex items-center gap-4 md:gap-6 leading-5 text-xs sm:text-base tracking-tight font-mono"
              >            
                {menuData?.map((item) => {
                  return (
                    <li key={uuidv4()} className='text-tertiary'>
                      <Link href={item?.link}>{item?.title}</Link>
                    </li>
                  )
                })}                    
              </ul>
            }
          </nav>
          {/* Desktop nav end */}      
        </div>             
      </div>
    </header>
    {/* Mobile nav start */}
    <nav className={
      'mobile-nav flex mt-4 justify-center relative w-full overflow-hidden'    
    }>          
      {Boolean(menuData && menuData?.length > 0) &&
        <ul
          role="list"
          className={
            classNames(
              toggleMenu ? "h-full lg:h-0" : "h-0 ",
              "flex flex-col text-tertiary items-center gap-4 md:gap-6 leading-5 text-xs sm:text-base tracking-tight font-mono"
            )
          }
        >            
          {menuData?.map((item, index) => {
            return (
              <li key={uuidv4()}>
                <Link href={item?.link}>{item?.title}</Link>
              </li>
            )
          })}                    
        </ul>
      }
    </nav>
    {/* Mobile nav end */}
 </>
  )
}
