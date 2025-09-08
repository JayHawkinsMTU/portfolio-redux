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
      description: "Released a physics-based platformer developed using C# and Unity to Steam",
      imgSrc: "placeholer"
    }
  },
]
