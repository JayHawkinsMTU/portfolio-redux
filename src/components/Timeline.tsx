import styles from '@/styles/Timeline.module.css'
import type { TimelineEvent, Project } from '@/types/projectTimeline.d.ts'
import { projectDataUrl, timeline } from '@/content/timeline.ts'
import TechIcon from '@/components/TechIcon.tsx';
import { projects, selectedProject, setSelectedProject } from '@/components/Projects.tsx'
import { Show, Switch, Match, createEffect } from 'solid-js'

function scrollToBottom() {
  const top = document.getElementById("timeline").getBoundingClientRect().bottom;
  window.scrollTo({
    top: top + window.scrollY,
    behavior: "smooth"
  });
}

export default function Timeline() {
  return (
    <>
      <button class={styles.fullbutton} onClick={() => scrollToBottom()}>
        jump to bottom
      </button>
      <div class={styles.timeline} id="timeline">
        {timeline.map((e) => <EventInterpreter event={e} />)}
      </div>
    </>
  );
}

function EventInterpreter(args: { event: TimelineEvent }) {
  if("timestamp" in args.event)
    return <Timestamp month={args.event.timestamp as string}/>
  else if("blurb" in args.event)
    return <Blurb text={args.event.blurb as string}/>
  else if("projectId" in args.event) {
    return (
      <>
        <Show when={projects.loading}>
          <ProjectSkeleton />
        </Show>
        <Switch>
          <Match when={projects.error}>
            <p class="text-red-500">Error loading projects</p>
          </Match>
          <Match when={projects()}>
            <Project project={projects()[args.event.projectId].data} />
          </Match>
        </Switch>
      </>
    )
  }
}

function Timestamp(args: { month: string }) {
  return (
    <h3 class={`${styles.timestamp} select-none`}>{args.month}</h3>
  );
}

function Blurb(args: { text: string }) {
  return (
    <div class={styles.blurb}>
      {args.text}
    </div>
  );
}


function Project(args: { project: Project }) {
  return (
    <span class={styles.project} id={args.project.title}
      onClick={() => {
        setSelectedProject(projects()[args.project.projectId]);
      }}>
      <img src={`${projectDataUrl}/${args.project.projectId}/thumbnail.webp`}
        alt={`${args.project.title} preview`} />
      <div class="px-2 w-full">
        <span class="flex items-center justify-between">
          <h1>{args.project.title}</h1>
          <span class="flex">
            {args.project.technologies.map((t) => <TechIcon tech={t} />)}
          </span>
        </span>
        <p class="text-l">{args.project.description}</p>
      </div>
    </span>
  )
}

function ProjectSkeleton() {
  return (
    <span class={styles.project}>
      <div class={styles.skeletonImg} />
      <div class="px-2 w-full">
        <span class="flex items-center justify-between">
          <div class={styles.skeletonSpan} />
        </span>
      </div>
    </span>
  )
}


