import styles from '@/styles/Projects.module.css'
import noise from '@/assets/256x256_Dissolve_Noise_Texture.png'

export default function Projects() {
  return (
    <div class={styles.tv}>
      <div class={styles.mask}>
        <img src={noise} alt="tv static"/>
      </div>
    </div>
  )
}
