import Image from 'next/image'
import ImgLike from '../../img/bookmark-star-solid-24(1).png' 

export default function Imglike() {
  return (
    <Image
      src={ImgLike}
      width={50}
      height={50}
      alt="Picture of the author"
    />
  )
}
