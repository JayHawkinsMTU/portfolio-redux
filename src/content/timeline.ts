import type { TimelineEvent } from '@/types/projectTimeline.d.ts';

export const timeline: TimelineEvent[] = [
  {
    eventType: "timestamp",
    eventData: "sept. '25"
  },
  {
    eventType: "project",
    eventData: {
      title: "MultiFX Pedal",
      description: "A Raspberry Pi OS based audio effects plugin manager and GUI as a part of an open-source guitar pedal project for Open Source Hardware Enterprise",
      technologies: ["python"],
      imgSrc: "src/assets/proj_placeholder.png"
    }
  },
  {
    eventType: "timestamp",
    eventData: "may '25"
  },
  {
    eventType: "blurb",
    eventData: "Started software engineering internship at Alliance Laundry Systems"
  },
  {
    eventType: "timestamp",
    eventData: "apr. '25"
  },
  {
    eventType: "project",
    eventData: {
      title: "Machine Shop Check-In",
      description: "A web-app designed to streamline the check-in process for MTU's machine shop developed as a part of the Humane Interface Design Enterprise",
      technologies: ["python"],
      imgSrc: "src/assets/proj_placeholder.png"
    }
  },
  {
    eventType: "timestamp",
    eventData: "dec. '24"
  },
  {
    eventType: "project",
    eventData: {
      title: "Shorty Shooters",
      description: "An online multiplayer party game developed for Husky Game Development Enterprise",
      technologies: ["python"],
      imgSrc: "src/assets/proj_placeholder.png"
    }
  },
  {
    eventType: "project",
    eventData: {
      title: "Rhythm Cowboy",
      description: "A rhythm game prototype based on \"Cowboy\" AKA \"Shotgun\".",
      technologies: ["c#", "unity"],
      imgSrc: "src/assets/proj_placeholder.png"
    }
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
  {
    eventType: "timestamp",
    eventData: "aug. '23"
  },
  {
    eventType: "blurb",
    eventData: "Began freshman year at Michigan Technological University"
  }
]
