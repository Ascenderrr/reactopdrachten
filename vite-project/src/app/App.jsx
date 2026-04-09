import "./App.css"
import styles from './app.module.css'
import { Link, Route, Routes } from 'react-router-dom';
import { About } from '../pages/About';
import { Games } from '../pages/Games';
import { Contact } from '../pages/Contact';
 
function NotFoundPage() {
  return (
    <section className={styles.pageSection}>
      <h2>Page Not Found</h2>
      <p>Deze pagina bestaat niet.</p>
      <Link className={styles.navLink} to="/">Terug naar Home</Link>
    </section>
  )
}
 
function App() {
  return (
    <main className={styles.app}>
      <nav className={styles.navbar}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <Link className={styles.navLink} to="/about">About</Link>
          </li>
          <li className={styles.listItem}>
            <Link className={styles.navLink} to="/games">Games</Link>
          </li>
          <li className={styles.listItem}>
            <Link className={styles.navLink} to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
 
      <Routes>
        <Route index element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/games" element={<Games />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>
  )
}
 
export default App
 
 