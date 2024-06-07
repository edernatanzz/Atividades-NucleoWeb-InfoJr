import rectangleImage from '/src/assets/Rectangle 37.png';
import Image from 'next/image';

export function ImgCard() {
  return (
    <Image
      src={rectangleImage}
      layout="responsive" 
      width={609}
      height={386}
      alt="Imagem do autor"
    />
  );
}
