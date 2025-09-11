import styles from '@/styles/Projects.module.css'
import { FaSolidEject } from 'solid-icons/fa'
import { createSignal } from 'solid-js'
import { timeline } from '@/content/timeline.ts'
import Timeline from '@/components/Timeline.tsx'
import type { TEProject } from '@/types/projectTimeline.d.ts'

type TvState = "EMPTY" | "LOADING" | "LOADED"

type ProjectFile = {
  content: string;
  data: TEProject;
}

export const [projects, setProjects] = createSignal<ProjectFile[]>([])
export const projectsDict: {[key: string]: ProjectFile} = {};

export default async function Projects() {
  const [state, setState] = createSignal<TvState>("EMPTY")

  async function loadProjects() {
    const projects: ProjectFile[] = [];
    timeline.forEach((i) => {
      // If project, fetch project data
      if("projectId" in i) {
        
      }
    })
  }

  return (
    <div class={styles.projects}>
      <Tv />
      <Summary />
    </div>
  )
}

function Tv() {
  return (
    <div class={styles.tv} id="tv">
      <div class={styles.noise}/>
    </div>
  )
}

function Summary() {
  return (
    <article>
      <span class="flex p-2 items-center justify-between">
        <h1 class="font-semibold">project timeline</h1>
        <Eject />
      </span>
      {state() == "EMPTY" &&
        <Timeline />
      }
    </article>
  )
}

function Eject() {
  return (
    <FaSolidEject
      class={
        `${styles.eject} ${state() == "EMPTY" && "fill-[rgb(var(--inactive))] pointer-events-none"}`
      } 
      onclick={() => setState("EMPTY")}
    />
  )
}
