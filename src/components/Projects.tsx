import styles from '@/styles/Projects.module.css'
import { FaSolidEject } from 'solid-icons/fa'
import { createResource, createSignal } from 'solid-js'
import { timeline, projectDataUrl } from '@/content/timeline.ts'
import Timeline from '@/components/Timeline.tsx'
import matter from 'gray-matter'
import type { Project, TEProject } from '@/types/projectTimeline.d.ts'

type TvState = "EMPTY" | "LOADING" | "LOADED"

type ProjectFile = {
  content: string;
  data: Project;
}

type ProjectDict = {[key: string]: ProjectFile}

const fetchProjects = async () => {
  const projs: ProjectDict = {}
  for(const e of timeline) {
    if("projectId" in e) {
      try {
        const url = `${projectDataUrl}/${e.projectId}/${e.projectId}.md`
        const response = await fetch(url)
        const body = await response.text();
        const m = matter(body);
        const proj: ProjectFile = {
          content: m.content,
          data: m.data as Project,
        }
        projs[e.projectId] = proj;
      } catch(error) {
        console.error(error.message);
      }
    }
  }
  return projs
}

export const [projects] = createResource<ProjectDict>(fetchProjects)
const [tvState, setTvState] = createSignal<TvState>("EMPTY")

export default function Projects() {

  //await fetch(`${projectDataUrl}machine_shop/machine_shop.md`)

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
      {tvState() == "EMPTY" &&
        <Timeline />
      }
    </article>
  )
}

function Eject() {
  return (
    <FaSolidEject
      class={
        `${styles.eject} ${tvState() == "EMPTY" && "fill-[rgb(var(--inactive))] pointer-events-none"}`
      } 
      onclick={() => setTvState("EMPTY")}
    />
  )
}
