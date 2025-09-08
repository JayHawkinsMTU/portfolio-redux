import type { TimelineEvent, Project } from '@/types/projectTimeline.d.ts';

export const timeline: TimelineEvent[] = [
  {
    eventType: "timestamp",
    eventData: "august '25"
  },
  {
    eventType: "blurb",
    eventData: "started third year of college at mtu"
  },
  {
    eventType: "timestamp",
    eventData: "august '24"
  },
  {
    eventType: "project",
    eventData: {
      title: "Squigley",
      description: "A physics-based platformer available on Steam",
      technologies: ["c#", "unity"],
      imgSrc: "src/assets/proj_placeholder.png"
    }
  },
]
