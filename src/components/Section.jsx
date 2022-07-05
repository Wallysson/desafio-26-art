import { Button } from './Button'
import styles from './Section.module.css'

import artRight from '../assets/art-right.png'

export function Section() {
  return (
    <section className={styles.section}>
      <div className={styles.contentTitle}>
        <h1>Descubra novos artistas e suas obras</h1>
        <span>Uma nova geração de jovens artistas surgem</span>
        <Button value={"Explorar"} />
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
      <div className={styles.sectionRight}>
        <img src={artRight} alt="" />
      </div>
    </section>
  )
}