import Logo from "@/components/logo";
import styles from "@/components/footer/styles.module.css";
import Container from "@/components/container";

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.flexContainer}>
          <Logo />
          [ソーシャル]
        </div>
      </Container>
    </footer>
  )
}