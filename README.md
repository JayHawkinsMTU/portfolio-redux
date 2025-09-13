# Portfolio Redux

My portfolio website built using SolidJS.

## Dependencies

- solid-icons
    - Provides SVG icon components
- marked
    - Parses .md files to HTML data
- DOMPurify
    - Sanitizes HTML data from marked. Not necessary, but best practice.
- gray-matter
    - parses 

## Adding Projects

The goal is to be able to add projects without touching html or typescript
code and only working under `projects/`.

`src/timeline.ts` contains configuration for the order and inclusion of data
such as projects, timestamps, and blurbs for additional context. This could
have been a simple .json file, but exporting it as a typescript const
allows me to easily type-check it using LSP features and prevent mistakes.
This file is also responsible for the project resource URL, where all
project markdown and image files are kept (this GitHub repo).

`projects/` Should contain all data pertaining to a project in the
following structure:
```
projects/<project_name>/
|- project.md           # Contains brief write-up and frontmatter
|- thumbnail.webp       # 240x135 image for timeline
|- preview.webp         # 640x480 animated image displayed to tv
```

`<project_name>.md` will contain the following in the frontmatter:
- `title` Display name of the project
- `description` Brief descripion used in timeline
- `technologies` Array of strings corresponding to Technology enum defined in
  `src/types/projectTimeline.d.ts`
  - Each entry in the enum should have a return value in 
    `src/components/TechIcon.tsx`

And optionally:
- `githubUrl?`
- `steamUrl?`
- `otherUrl?`

`<project_name>` should be written in snake case in all occurences.
