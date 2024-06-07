import { NavBar } from "@/components/nav-bar";
import { Header } from "@/components/header";
import styled from "styled-components";
import { SectionOne } from "@/components/section1";


export default function Home() {
  return (
    <>
      <Header />
      <NavBar />
      <SectionOne/>
    </>
  );
}
