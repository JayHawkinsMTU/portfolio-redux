import styles from '@/styles/Hero.module.css'

type HeroArguments = {
  text: string;
}

export default function Hero(args: HeroArguments) {
  return (
    <section class={styles.section}>
      <h1 class={styles.h1}>{args.text}</h1>
      <h1 class={styles.mirrored}>{args.text}</h1>
    </section>
  )
}
