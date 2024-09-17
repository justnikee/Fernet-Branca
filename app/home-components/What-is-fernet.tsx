import React from 'react'
import VimeoVideo from "../public/images/vimeo-ezgif.com-video-to-gif-converter.gif"
import FactoryImage from '../public/images/factory.webp'
import F1carGif from '../public/images/f1-car.gif'

import Image from 'next/image'
import Link from 'next/link'

const Whatisfernet = () => {
  return (
    <>
    <div className='mt-5'>
    <div className='max-w-[1440px] m-auto'>
        <div className='grid grid-cols-2 gap-5 overflow-hidden'>
          <div className='h-full flex gap-5 flex-col'>
          <div className='flex flex-col overflow-hidden max-h-[684px]'>
            <Image
            className='w-full rounded-lg object-cover h-full block'
              src={VimeoVideo}
              alt='video'
              width={600}
              height={600}
            />
            <div className='animated-container flex flex-nowrap'>
              <div className='bg_branca min-h-full h-[160px] items-center justify-center flex'>
                <h2 className='text-[64px] leading-[64px] uppercase font-[Interstate] font-extrabold text-black whitespace-nowrap pr-1'>
                  What Is Fernet-Branca?
                </h2>
              </div>
              <div className='bg_branca min-h-full h-[160px] items-center justify-center flex'>
                <h2 className='text-[64px] leading-[64px] uppercase font-[Interstate] font-extrabold text-black whitespace-nowrap pr-1'>
                  What Is Fernet-Branca?
                </h2>
              </div>
              <div className='bg_branca min-h-full h-[160px] items-center justify-center flex'>
                <h2 className='text-[64px] leading-[64px] uppercase font-[Interstate] font-extrabold text-black whitespace-nowrap pr-1'>
                  What Is Fernet-Branca?
                </h2>
              </div>
            </div>
          </div>
          <div className=''>
             <h2 className='text-3xl uppercase font-extrabold font-[Interstate] mb-3'>Well, technically it's an amaro.</h2>
             <p className='text-lg font-[Interstate] mb-3 leading-6 tracking-[0.9px]'>Which is an Italian after dinner drink intended to aid digestion. Crafted from a formula known to only one living soul, Fernets flavor profile has been described as bitter, herbaceous, menthol, or sweet, but true aficionados know it has an indefinable quality thats certainly not for everyone.</p>
             <Link className='text-xl font-[Interstate] font-extrabold uppercase underline underline-offset-1 hover:text-gray-300' href="#">Learn How To Enjoy Fernet</Link>
          </div>
          </div>

          <div className='flex flex-col gap-5'>
            <div className='flex items-center justify-center max-h-[400px]'>
              <Image className='rounded-lg object-cover h-full w-full' src={FactoryImage} alt='factory image' height={1000} width={1000} />
            </div>
            <div className='flex justify-center items-center max-h-[400px]'>
              <Image className='rounded-lg object-cover h-full w-full' src={F1carGif} alt='f1 car gif' height={1000} width={1000} />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};


export default Whatisfernet