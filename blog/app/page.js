import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/hero";
import Layout from "@/components/layout";

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
      </Layout>
    </>
  )
}
