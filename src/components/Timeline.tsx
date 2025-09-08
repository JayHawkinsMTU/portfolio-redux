import styles from '@/styles/Timeline.module.css'
import type { TimelineEvent, Project } from '@/types/projectTimeline.d.ts'
import { timeline } from '@/content/timeline.ts'

export default function Timeline() {
  return (
    <>
      <button class={styles.fullbutton}>jump to bottom</button>
      <div class={styles.timeline}>
        {timeline.map((e) => <EventInterpreter event={e} />)}
      </div>
    </>
  );
}

function EventInterpreter(args: { event: TimelineEvent }) {
  switch(args.event.eventType) {
    case "timestamp":
      return <Timestamp month={args.event.eventData as string}/>
    case "blurb":
      return <Blurb text={args.event.eventData as string}/>
    case "project":
      return <Project project={args.event.eventData as Project} />
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
    <span class={styles.project}>
      {/* TODO: replace placeholder */}
      <div class="bg-white w-[240px] h-[135px]" />
      <div class="px-2">
        <h1>{args.project.title}</h1>
        <p class="text-l">{args.project.description}</p>
      </div>
    </span>
  )
}




