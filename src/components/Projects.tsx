import styles from '@/styles/Projects.module.css'
import noise from '@/assets/256x256_Dissolve_Noise_Texture.png'

export default function Projects() {
  return (
    <div class={styles.projects}>
      <Tv />
      <Summary />
    </div>
  )
}

function Tv() {
  return (
    <div class={styles.tv}>
      <div class={styles.noise}/>
    </div>
  )
}

function Summary() {
  return (
    <article>
      <span class="flex p-2">
        <h1 class="font-semibold">select a project</h1>
      </span>
    </article>
  )
}
