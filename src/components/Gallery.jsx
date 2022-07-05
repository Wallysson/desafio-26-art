import styles from './Gallery.module.css'

import galleryUm from '../assets/gallery-1.png'
import galleryDois from '../assets/gallery-2.png'
import galleryTres from '../assets/gallery-3.png'

export function Gallery() {
  return (
    <section className={styles.gallery}>
      <div className={styles.galleryBoxImg}>
        <img src={galleryUm} alt="Mulher pintando o quadro" />
        <img src={galleryDois} alt="Rosto de mulher no quadro" />
        <img src={galleryTres} alt="Pintura colorida" />
      </div>
      
      <div className={styles.content}>
        <strong>Confira as últimas coleções</strong>
        <button>Ver mais</button>
      </div>
    </section>
  )
}