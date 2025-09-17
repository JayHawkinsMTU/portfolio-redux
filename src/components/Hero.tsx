import styles from '@/styles/Hero.module.css'
import { JSXElement } from 'solid-js';
import { FaBrandsLinkedinIn } from 'solid-icons/fa'
import { FiGithub, FiMail } from 'solid-icons/fi'

type HeroArguments = {
  title: string;
  subtitle: string;
}

export default function Hero(args: HeroArguments) {
  return (
    <section class={styles.section}>
      <div class="select-none">
        <MirrorText title={args.title} />
        <Subtitle subtitle={args.subtitle} />
      </div>
      <span class="my-5 mx-auto inline-block">
        <LinkIcon href="https://github.com/jayhwkns">
          <FiGithub class={styles.icon} />
        </LinkIcon>
        <LinkIcon href="https://www.linkedin.com/in/jakob-hawkins-a37421310/">
          <FaBrandsLinkedinIn class={styles.icon} />
        </LinkIcon>
        <LinkIcon href="mailto:hawkinsjr27@gmail.com">
          <FiMail class={styles.icon} /> 
        </LinkIcon>
      </span>
    </section>
  )
}

function MirrorText(args: { title: string }) {
  return (
    <>
      <h1>{args.title}</h1>
      <h1 class={styles.mirrored}>{args.title}</h1>
    </>
  )
}

function Subtitle(args: { subtitle: string }) {
  return (
    <div class="w-fit mx-auto">
      <h3 class={styles.typewriter}>{args.subtitle}</h3>
    </div>
  )
}

export function LinkIcon(args: {href: string, children: JSXElement}) {
  return (
    <a href={args.href}>
    <button class={styles.link}>
      {args.children}
    </button>
    </a>
  )
}
