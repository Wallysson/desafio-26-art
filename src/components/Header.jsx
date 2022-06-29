import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <h1>Art.</h1>
      <input 
        placeholder="Buscar"
        type="text"
      />
      <button >Entrar</button>
    </header>
  )
}