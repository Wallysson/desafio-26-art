import styles from './Artists.module.css'

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
          <img src="src/assets/artist-1.png" alt="Sabine Lowe" />
        </div>
        <div className={styles.artistsContainerText}>
          <div className={styles.artistsText}>
            <strong>Sabine Lowe</strong>
            <span>Design e Fotógrafa</span>
          </div>
          <img src="src/assets/artist-2.png" alt="Eleanor Pena" />
        </div>
        <div className={styles.artistsContainerText}>
          <div className={styles.artistsText}>
            <strong>Sabine Lowe</strong>
            <span>Design e Fotógrafa</span>
          </div>
          <img src="src/assets/artist-3.png" alt="Leslie Alexander" />
        </div>
      </div>
    </section>
  )
}