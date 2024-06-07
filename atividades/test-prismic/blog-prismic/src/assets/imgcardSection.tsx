"use client"

import rectangleImage from '/src/assets/Rectangle 33.png';

import Image from 'next/image';
 
export function ImgCardSection() {
  return (
    <Image
      src={rectangleImage} 
      width={337}
      height={186}
      alt="Picture of the author"
    />
  );
}
