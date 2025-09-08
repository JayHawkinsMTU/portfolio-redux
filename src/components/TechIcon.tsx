import type { Technology } from "@/types/projectTimeline.js"
import { TbBrandCarbon, TbBrandCpp, TbBrandCSharp, TbBrandKotlin, TbBrandUnity, TbSql } from "solid-icons/tb"
import styles from "@/styles/TechIcon.module.css"

// Hard-coded replacement for element dict. Not ideal.
export default function TechIcon(args: { tech: Technology}) {
  switch(args.tech) {
    case "c#":
      return <TbBrandCSharp class={styles.techicon} />
    case "unity":
      return <TbBrandUnity class={styles.techicon} />
    case "c":
      return <TbBrandCarbon class={styles.techicon} />
    case "c++":
      return <TbBrandCpp class={styles.techicon} />
    case "kotlin":
      return <TbBrandKotlin class={styles.techicon} />
    case "sql":
      return <TbSql class={styles.techicon} />
  }
}

