import styles from '@/styles/Timeline.module.css'
import type { TimelineEvent, Project } from '@/types/projectTimeline.d.ts'
import { timeline } from '@/content/timeline.ts'
import TechIcon from '@/components/TechIcon.tsx';

function scrollToBottom() {
  const top = document.getElementById("timeline").getBoundingClientRect().bottom;
  window.scrollTo({
    top: top + window.scrollY,
    behavior: "smooth"
  });
}

function scrollToTv() {
  const top = document.getElementById("tv").getBoundingClientRect().top; 
  // gap between tv and top after scrolling
  const paddingTop = 25;
  window.scrollTo({
    top: top + window.scrollY - paddingTop, 
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
  else if("projectId" in args.event)
    return <Project project={args.event.projectId} />
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
      onClick={() => scrollToTv()}>
      <img src={args.project.imgSrc} alt={`${args.project.title} preview`}/>
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




