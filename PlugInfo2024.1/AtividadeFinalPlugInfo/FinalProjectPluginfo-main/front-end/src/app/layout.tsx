'use client'
import "./globals.css"
import { inter, montserrat, karla, oxygen, playball, racing_sans_one, galada, mystery_quest } from '@/font/fonts';
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import StyledComponentsRegistry from "./registry"

interface Props {
  children: React.ReactNode;
}

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <html lang="pt-br">
        <StyledComponentsRegistry>
        <body className={`${inter.variable} ${montserrat.variable} ${karla.variable} ${oxygen.variable} ${playball.variable} ${racing_sans_one.variable} ${galada.variable} ${mystery_quest.variable}`}>
          <Header />
          {children}
         <Footer/>
        </body>
        </StyledComponentsRegistry>
      </html>
    </>
  );
};

export default RootLayout;
