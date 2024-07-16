import Image from 'next/image'
import ImgLiked from '../../img/bookmark-star-solid-24(2).png' 

export default function Imgliked() {
  return (
    <Image
      src={ImgLiked}
      width={50}
      height={50}
      alt="Picture of the author"
    />
  )
}
