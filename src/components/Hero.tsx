import styles from '@/styles/Hero.module.css'

type HeroArguments = {
  title: string;
  subtitle: string;
}

export default function Hero(args: HeroArguments) {
  return (
    <section class={styles.section}>
      <MirrorText title={args.title} />
      <Subtitle subtitle={args.subtitle} />
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
    <h3 class={styles.glowEmphasize}>{args.subtitle}</h3>
  )
}
