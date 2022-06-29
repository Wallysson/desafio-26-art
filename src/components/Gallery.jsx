import styles from './Gallery.module.css'

export function Gallery() {
  return (
    <section className={styles.gallery}>
      <div className={styles.galleryBoxImg}>
        <img src="src/assets/gallery-1.png" alt="Mulher pintando o quadro" />
        <img src="src/assets/gallery-2.png" alt="Rosto de mulher no quadro" />
        <img src="src/assets/gallery-3.png" alt="Pintura colorida" />
      </div>
      
      <div className={styles.content}>
        <strong>Confira as últimas coleções</strong>
        <button>Ver mais</button>
      </div>
    </section>
  )
}