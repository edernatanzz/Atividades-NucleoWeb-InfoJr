import logoImage from '/src/assets/logo.svg'; 
import bottonimg from './Icon.png';
import iconuserpng from './iconC1.svg';
import iconlojapng from './iconC2.svg';
import icondolar from './iconC3.svg';
import Image from 'next/image';

export function LogoPadaria() {
  return (
    <Image
      src={logoImage} 
      layout="responsive" 
      width={119}
      height={117}
      alt="Imagem do autor"
    />
  );
}

export function IconUser() {
  return (
    <Image 
      src={iconuserpng} 
      alt="Ícone de usuário" 
      layout="responsive" 
      width={24}  
      height={24} 
    />
  );
}

export function IconLoja() {
  return (
    <Image 
      src={iconlojapng} 
      alt="Ícone da loja" 
      layout="responsive" 
      width={24}  
      height={24} 
    />
  );
}

export function IconDolar() {
  return (
    <Image 
      src={icondolar} 
      alt="Ícone de dólar" 
      layout="responsive" 
      width={24}  
      height={24} 
    />
  );
}

export function ButtonDelete() {
  return (
    <Image 
      src={bottonimg} 
      alt="Botão de deletar" 
      layout="responsive" 
      width={24}  
      height={24} 
    />
  );
}
