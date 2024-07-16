import Image from 'next/image'
import About from '../../img/maisSobre.png'


export default function ImgAbout(){
    return(
        <Image
      src={About}
      width={50}
      height={50}
      alt="Picture of the author"
    />
    )
}