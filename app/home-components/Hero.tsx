// "use client";

import Image from "next/image";
// import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import HeroImage from "../public/images/homeheroredacted.png";
import ButtonOffsetImage from "../public/images/btn-bg.png";
import Link from "next/link";

import FernetBottle0000 from '../public/images/Hero-images/Fernet_bottle0000.png';
// import FernetBottle0001 from '../public/images/Hero-images/Fernet_bottle0001.png';
// import FernetBottle0002 from '../public/images/Hero-images/Fernet_bottle0002.png';
// import FernetBottle0003 from '../public/images/Hero-images/Fernet_bottle0003.png';
// import FernetBottle0004 from '../public/images/Hero-images/Fernet_bottle0004.png';
// import FernetBottle0005 from '../public/images/Hero-images/Fernet_bottle0005.png';
// import FernetBottle0006 from '../public/images/Hero-images/Fernet_bottle0006.png';
// import FernetBottle0007 from '../public/images/Hero-images/Fernet_bottle0007.png';
// import FernetBottle0008 from '../public/images/Hero-images/Fernet_bottle0008.png';
// import FernetBottle0009 from '../public/images/Hero-images/Fernet_bottle0009.png';
// import FernetBottle0010 from '../public/images/Hero-images/Fernet_bottle0010.png';
// import FernetBottle0011 from '../public/images/Hero-images/Fernet_bottle0011.png';
// import FernetBottle0012 from '../public/images/Hero-images/Fernet_bottle0012.png';
// import FernetBottle0013 from '../public/images/Hero-images/Fernet_bottle0013.png';
// import FernetBottle0014 from '../public/images/Hero-images/Fernet_bottle0014.png';
// import FernetBottle0015 from '../public/images/Hero-images/Fernet_bottle0015.png';
// import FernetBottle0016 from '../public/images/Hero-images/Fernet_bottle0016.png';
// import FernetBottle0017 from '../public/images/Hero-images/Fernet_bottle0017.png';
// import FernetBottle0018 from '../public/images/Hero-images/Fernet_bottle0018.png';
// import FernetBottle0019 from '../public/images/Hero-images/Fernet_bottle0019.png';
// import FernetBottle0020 from '../public/images/Hero-images/Fernet_bottle0020.png';
// import FernetBottle0021 from '../public/images/Hero-images/Fernet_bottle0021.png';
// import FernetBottle0022 from '../public/images/Hero-images/Fernet_bottle0022.png';
// import FernetBottle0023 from '../public/images/Hero-images/Fernet_bottle0023.png';
// import FernetBottle0024 from '../public/images/Hero-images/Fernet_bottle0024.png';
// import FernetBottle0025 from '../public/images/Hero-images/Fernet_bottle0025.png';
// import FernetBottle0026 from '../public/images/Hero-images/Fernet_bottle0026.png';
// import FernetBottle0027 from '../public/images/Hero-images/Fernet_bottle0027.png';
// import FernetBottle0028 from '../public/images/Hero-images/Fernet_bottle0028.png';
// import FernetBottle0029 from '../public/images/Hero-images/Fernet_bottle0029.png';
// import FernetBottle0030 from '../public/images/Hero-images/Fernet_bottle0030.png';

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
//   const imageViewer = useRef(null);
//   const imagesRef = useRef([]);

//   const images = [
//     { src: FernetBottle0000, alt: 'Fernet bottle 1', width: 100, height: 150 },
//     { src: FernetBottle0001, alt: 'Fernet bottle 2', width: 100, height: 150 },
//     { src: FernetBottle0002, alt: 'Fernet bottle 3', width: 100, height: 150 },
//     { src: FernetBottle0003, alt: 'Fernet bottle 4', width: 100, height: 150 },
//     { src: FernetBottle0004, alt: 'Fernet bottle 5', width: 100, height: 150 },
//     { src: FernetBottle0005, alt: 'Fernet bottle 6', width: 100, height: 150 },
//     { src: FernetBottle0006, alt: 'Fernet bottle 7', width: 100, height: 150 },
//     { src: FernetBottle0007, alt: 'Fernet bottle 8', width: 100, height: 150 },
//     { src: FernetBottle0008, alt: 'Fernet bottle 9', width: 100, height: 150 },
//     { src: FernetBottle0009, alt: 'Fernet bottle 10', width: 100, height: 150 },
//     { src: FernetBottle0010, alt: 'Fernet bottle 11', width: 100, height: 150 },
//     { src: FernetBottle0011, alt: 'Fernet bottle 12', width: 100, height: 150 },
//     { src: FernetBottle0012, alt: 'Fernet bottle 13', width: 100, height: 150 },
//     { src: FernetBottle0013, alt: 'Fernet bottle 14', width: 100, height: 150 },
//     { src: FernetBottle0014, alt: 'Fernet bottle 15', width: 100, height: 150 },
//     { src: FernetBottle0015, alt: 'Fernet bottle 16', width: 100, height: 150 },
//     { src: FernetBottle0016, alt: 'Fernet bottle 17', width: 100, height: 150 },
//     { src: FernetBottle0017, alt: 'Fernet bottle 18', width: 100, height: 150 },
//     { src: FernetBottle0018, alt: 'Fernet bottle 19', width: 100, height: 150 },
//     { src: FernetBottle0019, alt: 'Fernet bottle 20', width: 100, height: 150 },
//     { src: FernetBottle0020, alt: 'Fernet bottle 21', width: 100, height: 150 },
//     { src: FernetBottle0021, alt: 'Fernet bottle 22', width: 100, height: 150 },
//     { src: FernetBottle0022, alt: 'Fernet bottle 23', width: 100, height: 150 },
//     { src: FernetBottle0023, alt: 'Fernet bottle 24', width: 100, height: 150 },
//     { src: FernetBottle0024, alt: 'Fernet bottle 25', width: 100, height: 150 },
//     { src: FernetBottle0025, alt: 'Fernet bottle 26', width: 100, height: 150 },
//     { src: FernetBottle0026, alt: 'Fernet bottle 27', width: 100, height: 150 },
//     { src: FernetBottle0027, alt: 'Fernet bottle 28', width: 100, height: 150 },
//     { src: FernetBottle0028, alt: 'Fernet bottle 29', width: 100, height: 150 },
//     { src: FernetBottle0029, alt: 'Fernet bottle 30', width: 100, height: 150 },
//     { src: FernetBottle0030, alt: 'Fernet bottle 31', width: 100, height: 150 },
// ]

  // useEffect(() => {
  //   const frames = images.length - 1;
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: imageViewer.current,
  //       start: "top top",
  //       end: "+=" + (frames * 100) + "%", // Adjust based on the number of frames
  //       scrub: 1,
  //       pin: true,
  //       // markers: true, // Remove in production
  //     },
  //   });

  //   imagesRef.current.forEach((image, index) => {
  //     gsap.set(image, { opacity: 0 });

  //     if (index === 0) {
  //       gsap.set(image, { opacity: 1 });
  //     } else {
  //       tl.to(imagesRef.current[index - 1], {
  //         opacity: 0,
  //         duration: 1 / frames,
  //         ease: "none",
  //       })
  //       .to(image, {
  //         opacity: 1,
  //         duration: 1 / frames,
  //         ease: "none",
  //       }, "-=0.5");
  //     }
  //   });
  // }, [images]);

  return (

      <div className="relative hero_bg mt-[-100px] flex items-center max-w-[1440px] mx-auto h-[800px] bg-cover rounded-tl-lg rounded-tr-lg" >
        <div /*ref={imageViewer}*/ className="absolute z-[2] left-0 bottom-0 right-0 bg-no-repeat bg-cover h-[800px] ">
          
        <Image
              className="w-full"
              src={FernetBottle0000}
              alt="banner image"
              height={1000}
              width={1000}
            />
          {/* {images.map((image, index) => (
            <Image
              className="absolute bottom-0 opacity-0 w-full"
              key={index}
              src={image.src}
              alt={image.alt}
              ref={(el) => (imagesRef.current[index] = el)}
              style={{ opacity: index === 0 ? 1 : 0 }}
            />
          ))} */}
        </div>
        <div className="absolute left-10 top-1/2 flex w-1/2 items-start flex-col justify-center h-full gap-5 transform_y">
          <h1 className="text-5xl leading-[62px] uppercase font-[InterstateBlack]">
            The secret is out. <br/> Fernet-Branca is
            <span className="flex gap-2 items-end leading-[30px]">
              <Image width={214} height={44} alt="bandade" src={HeroImage} />.
            </span>
          </h1>
          <Link className="relative w-[220px] h-[48px] mt-[16px] mb-[8px]" href="/">
            <button className="relative w-full h-full py-3 bg-white text-[18px] text-black z-10 font-[InterstateBlack] uppercase border border-black">
              Discover Fernet
            </button>
            <Image className="absolute h-full w-full top-[3px] bg-repeat z-[1px] left-[3px]" width={200} height={200} alt="bandade" src={ButtonOffsetImage} />
          </Link>
        </div>
      </div>
  );
};
