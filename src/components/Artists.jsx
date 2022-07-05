import styles from './Artists.module.css'

import artistUm from '../assets/artist-1.png'
import artistDois from '../assets/artist-2.png'
import artistTres from '../assets/artist-3.png'


export function Artists() {
  return (
    <section className={styles.artists}>
      <h3>Artistas</h3>
      
      <div className={styles.artistsContainer}>
        <div className={styles.artistsContainerText}>
          <div className={styles.artistsText}>
            <strong>Sabine Lowe</strong>
            <span>Design e Fotógrafa</span>
          </div>
          <img src={artistUm} alt="Sabine Lowe" />
        </div>
        <div className={styles.artistsContainerText}>
          <div className={styles.artistsText}>
            <strong>Sabine Lowe</strong>
            <span>Design e Fotógrafa</span>
          </div>
          <img src={artistDois} alt="Eleanor Pena" />
        </div>
        <div className={styles.artistsContainerText}>
          <div className={styles.artistsText}>
            <strong>Sabine Lowe</strong>
            <span>Design e Fotógrafa</span>
          </div>
          <img src={artistTres} alt="Leslie Alexander" />
        </div>
      </div>
    </section>
  )
}