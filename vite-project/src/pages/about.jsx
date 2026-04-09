import styles from '../app/app.module.css';
import { AboutMe } from '../about_me/AboutMe';
import { Top10 } from '../top10/Top10';
 
export function About() {
  return (
    <section className={styles.pageSection}>
      <h2>About</h2>
      <AboutMe />
      <Top10 />
    </section>
  );
}
 