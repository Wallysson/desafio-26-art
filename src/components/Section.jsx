import styles from './Section.module.css'

export function Section() {
  return (
    <section className={styles.section}>
      <div className={styles.contentTitle}>
        <h1>Descubra novos artistas e suas obras</h1>
        <span>Uma nova geração de jovens artistas surgem</span>
        <button>Explorar</button>
        <div className={styles.contentDescription}>
          <div className={styles.contentDescriptionItems}>
            <strong>+2 mil</strong>
            <span>Artistas</span>
          </div>
          <div className={styles.contentDescriptionItems}>
            <strong>+7 mil</strong>
            <span>Vendas</span>
          </div>
          <div className={styles.contentDescriptionItems}>
            <strong>+16 mil</strong>
            <span>Avaliações</span>
          </div>
        </div>
      </div>
      <img src="src/assets/art-right.png" alt="" />
    </section>
  )
}