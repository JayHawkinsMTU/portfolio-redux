import styles from '@/styles/Projects.module.css'
import { FaSolidEject } from 'solid-icons/fa'

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
      <span class="flex p-2 items-center justify-between">
        <h1 class="font-semibold">select a project</h1>
        <FaSolidEject />
      </span>
    </article>
  )
}
