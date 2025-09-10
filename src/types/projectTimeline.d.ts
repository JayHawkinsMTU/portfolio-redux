export type TimelineEvent = TETimestamp | TEBlurb | TEProject;

export type TETimestamp = {
  timestamp: string;
}

export type TEBlurb = {
  blurb: string;
}

export type TEProject = {
  projectId: string;
}

export type Project = {
  title: string;
  description: string;
  technologies: Technology[]
  githubUrl?: string;
  steamUrl?: string;
  otherUrl?: string;
}

// Showcase technologies and languages used on a project
export type Technology = "c#" | "unity" | "python" |
    "c" | "c++" | "kotlin" | "sql"

