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
code and only working under `src/content`.

`src/timeline.ts` contains configuration for the order and inclusion of data
such as projects, timestamps, and blurbs for additional context. This could
have been a simple .json file, but exporting it as a typescript const
allows me to easily type-check it using LSP features and prevent mistakes.

`src/projects/` Should contain all data pertaining to a project in the
following structure:
```
projects/<project_name>/
| <project_name>.md                 # Contains brief write-up and frontmatter
| <project_name>_thumbnail.webp     # 240x135 image for timeline
| <project_name>.webp               # Higher resolution image displayed to tv
```

`<project_name>.md` will contain the following in the frontmatter:
- `displayName`
- `description` Brief descripion used in timeline
- `technologies` Array of strings corresponding to Technology enum defined in
  `src/types/projectTimeline.d.ts`
  - Each entry in the enum should have a return value in 
    `src/components/TechIcon.tsx`

`<project_name>` should be written in snake case in all occurences.
