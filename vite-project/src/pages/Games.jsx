import styles from '../app/app.module.css';
import { Cookie } from '../cookie/cookie';
import { Pokemon } from '../pokemon/Pokemon';
 
export function Games() {
  return (
    <section className={styles.pageSection}>
      <h2>Games</h2>
      <Cookie />
      <Pokemon />
    </section>
  );
}