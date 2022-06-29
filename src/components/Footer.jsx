import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <h1>Art.</h1>
      <ul>
        <li>Inicio</li>
        <li>Buscar</li>
        <li>Explorar</li>
        <li>Sobre Nós</li>
      </ul>
    </footer>
  )
}