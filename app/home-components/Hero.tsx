import Image from "next/image";
import HeroImage from "../public/images/homeheroredacted.png";
import ButtonOffsetImage from "../public/images/btn-bg.png";
import Button from "../global-components/Button";

import FernetBottle0000 from '../public/images/Hero-images/Fernet_bottle0000.png';


export const Hero = () => {

  return (

      <div className="relative hero_bg mt-[-100px] flex items-center max-w-[1440px] mx-auto h-[800px] bg-cover rounded-tl-lg rounded-tr-lg" >
        <div className="absolute z-[2] left-0 bottom-0 right-0 bg-no-repeat bg-cover h-[800px] ">
        <Image
              className="w-full"
              src={FernetBottle0000}
              alt="banner image"
              height={1000}
              width={1000}
            />
        </div>
        <div className="absolute left-10 top-1/2 flex w-1/2 items-start flex-col justify-center h-full gap-5 transform_y">
          <h1 className="text-5xl leading-[62px] uppercase font-[InterstateBlack]">
            The secret is out. <br/> Fernet-Branca is
            <span className="flex gap-2 items-end leading-[30px]">
              <Image width={214} height={44} alt="bandade" src={HeroImage} />.
            </span>
          </h1>
          <Button ButtonText="Discover Fernet" ButtonUrl="#" ImageUrl={ButtonOffsetImage} BgColor="#fff" TextColor="#1c1b1b" BorderColor="#1c1b1b"/>
        </div>
      </div>
  );
};
