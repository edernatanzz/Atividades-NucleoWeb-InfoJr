import { NavBar } from "@/components/nav-bar";
import { Header } from "@/components/header";

import { SectionOne } from "@/components/section1";
import { createClient } from "@/prismicio";



export default async function Home() {

  const client = createClient();
  const page = await client.getByUID("title", "main");

  const card = await client.getByUID("card", "main");

  return (
    <>
      <Header />
      <NavBar title={page.data.title}/>

      <SectionOne 
                  cardtag={card.data.tag}
                  cardtitle={card.data.titulocard}
                  cardsubtitle={card.data.subtitulo}
                  imgcard={card.data.image}
          />
  
  <SectionOne 
                  cardtag={card.data.tag}
                  cardtitle={card.data.titulocard}
                  cardsubtitle={card.data.subtitulo}
                  imgcard={card.data.image}
          />
    </>
  );
}
