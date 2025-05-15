import Logo from '@/components/logo';
import Nav from '@/components/nav';
import styles from "@/components/header/styles.module.css";
import Container from "@/components/container";

export default function Header() {
  return (
    <header>
      <Container large>
        <div className={styles.flexContainer}>
          <Logo boxOn/>
          <Nav />
        </div>
      </Container>
    </header>
  )
}