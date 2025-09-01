import styles from '@/styles/Projects.module.css'
import { FaSolidEject } from 'solid-icons/fa'
import { createSignal } from 'solid-js'

type TvState = "EMPTY" | "LOADING" | "LOADED"

const [state, setState] = createSignal<TvState>("LOADED")

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
        <Eject />
      </span>
    </article>
  )
}

function Eject() {
  return (
    <FaSolidEject class={
      `${styles.eject} ${state() == "EMPTY" && "fill-[rgb(var(--inactive))] pointer-events-none"}`
    } 
    onclick={() => setState("EMPTY")} />
  )
}
