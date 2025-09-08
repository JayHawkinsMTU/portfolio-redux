export type TimelineEvent = {
  eventType: "timestamp" | "blurb" | "project"
  eventData: Project | string;
};

export type Project = {
  title: string;
  description: string;
  imgSrc?: string;
  githubLink?: URL;
  steamLink?: URL;
  otherLink?: URL;
}

