import rectangleImage from '/src/assets/Rectangle 37.png';

import Image from 'next/image';
 
export function ImgCard() {
  return (
    <Image
      src={rectangleImage} 
      width={609}
      height={386}
      alt="Picture of the author"
    />
  );
}
