import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/hero";
import Container from "@/components/container";
import Meta from "@/components/meta";

export const metadata = Meta({
  pageTitle: "ホーム",
});

export default function Home() {
  return (
    <Container>
      <Hero
        title="CUBE"
        subtitle="アウトプットしていくサイト"
        imageOn
      />
    </Container>
  )
}
