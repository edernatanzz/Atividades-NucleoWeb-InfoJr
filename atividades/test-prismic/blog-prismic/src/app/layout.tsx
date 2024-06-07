import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from '@/prismicio'
import "./globals.css";
import { Montserrat } from "next/font/google";


const montserrat = Montserrat ({ 
  weight: ['500'],
  subsets: ["latin"] 
});



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className} >
        {children}
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  )
}