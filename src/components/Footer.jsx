import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <h1>Art.</h1>
      <ul>
        <li>
          <a href="#">Inicio</a>
        </li>
        <li>
          <a href="#">Buscar</a>          
        </li>
        <li>
          <a href="#">Explorar</a>
        </li>
        <li>          
          <a href="#">Sobre nós</a>      
        </li>
      </ul>
    </footer>
  )
}