import styles from '@/styles/Timeline.module.css'

export default function Timeline() {
  return (
    <>
      <button class={styles.fullbutton}>jump to bottom</button>
      <div class={styles.timeline}>
        <Timestamp month="September '25" />
        <Blurb text="started third year at MTU" />
        <Timestamp month="May '25" />
      </div>
    </>
  );
}

function Timestamp(args: { month: string }) {
  return (
    <h3 class={styles.timestamp}>{args.month}</h3>
  );
}

function Blurb(args: { text: string }) {
  return (
    <div class={styles.blurb}>
      {args.text}
    </div>
  );
}
