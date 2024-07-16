"use client"

import rectangleImage from '/src/assets/Rectangle 34.png';

import Image from 'next/image';
 
export function Picture() {
  return (
    <Image
      src={rectangleImage} 
      width={32}
      height={32}
      alt="Picture of the author"
    />
  );
}
