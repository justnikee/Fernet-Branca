import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { StaticImageData } from 'next/image'


type Props = {
    ButtonText: string,
    ButtonUrl: string,
    ImageUrl: StaticImageData | string,
    BgColor: string,
    BorderColor: string,
    TextColor: string
}

const Button = ({ButtonText, ButtonUrl, ImageUrl, BgColor, TextColor, BorderColor}: Props) => {
  return (
    <>
        <Link className="relative w-[220px] h-[48px] mt-[16px] mb-[8px] button-hover" href={ButtonUrl}>
            <button className={`relative w-full h-full py-3 text-[18px] z-10 font-[InterstateBlack] uppercase border`}
                    style={{
                        backgroundColor: BgColor,   
                        color: TextColor,             
                        borderColor: BorderColor,      
                      }}
            >
             {ButtonText}
            </button>
            <Image className="hover-image absolute h-full w-full top-[3px] bg-repeat z-[1px] left-[3px]" width={200} height={200} alt="bandade" src={ImageUrl} />
          </Link>
    </>
  )
}

export default Button