import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
      </main>
      
      <Footer />
    </>
  )
}
