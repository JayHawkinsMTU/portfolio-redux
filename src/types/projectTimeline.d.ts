export type TimelineEvent = {
  eventType: "timestamp" | "blurb" | "project"
  eventData: Project | string;
};

export type Project = {
  title: string;
  description: string;
  imgSrc: string;
  technologies: Technology[]
  githubLink?: URL;
  steamLink?: URL;
  otherLink?: URL;
}

// Showcase technologies and languages used on a project
export type Technology = "c#" | "unity" | "python" |
    "c" | "c++" | "kotlin" | "sql"

