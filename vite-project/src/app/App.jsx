import './App.css'
import styles from './App.module.css'
import { AboutMe } from '../about_me/AboutMe'
import { Top10 } from '../top10/Top10'
import { Cookie } from '../cookie/cookie'
import { Pokemon } from '../pokemon/Pokemon'







function App() {
  return (
    <main>
      <navbar className={styles.navbar}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <a href="#">Home</a>
          </li>
          <li className={styles.listItem}>
            <a href="/about">About</a>
          </li>
          <li className={styles.listItem}>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </navbar>
      <AboutMe />
      <Top10 />
      <Cookie />
      <Pokemon />
    </main>
  )
}



export default App
