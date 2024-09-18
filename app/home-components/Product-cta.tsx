import React from 'react'
import Button from '../global-components/Button'
import ButtonBgImage from "../public/images/ctabgyellow.png"
import ShopImage from '../public/images/shop-teaser.webp'
import Image from 'next/image'

type Props = {}

const Productcta = (props: Props) => {
  return (
    <div className='mt-5'>
      <div className='max-w-[1440px] m-auto'>
        <div className='flex'>
           <div className='w-1/3 flex flex-col items-start justify-center px-10 '>
              <h2 className='text-5xl font-[Interstate] leading-[55px] uppercase font-extrabold'>New merch just dropped</h2>
              <Button ImageUrl={ButtonBgImage} ButtonText='Get Yours' ButtonUrl='' BgColor="#1c1b1b"  TextColor="#fff" BorderColor="#fff"/>
           </div>
           <div className='w-2/3'>
               <Image className='h-full w-full' src={ShopImage} alt="shop image" height={1000} width={1000} />
           </div>
        </div> 
      </div>
    </div>
  )
}

export default Productcta