import styles from "./styles.module.css";

export default function PostBody({ children }) {
  return (
    <div className={styles.stack}>
      {children}
    </div>
  )
}