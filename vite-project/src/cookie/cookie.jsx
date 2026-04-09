import { useState } from 'react'
import styles from './cookie.module.css'

export function Cookie(){
    const [score, setScore] = useState(0);
    const [grandmas, setGrandmas] = useState(0);
    const grandmaCost = Math.round(20 * 1.15 ** grandmas);

    function scoreUp(){
        setScore((prev) => prev + 1 + grandmas);
    }

    function buyGrandma(){
        if (score >= grandmaCost){
            setGrandmas((prev) => prev + 1);
            setScore((prev) => prev - grandmaCost);
        }
    }

    return (
        <section className={styles.cookieCard}>
            <h1 className={styles.title}>Cookie clicker</h1>
            <p className={styles.subtitle}>Click the cookie to earn points!</p>
            <div className={styles.score}>Score: {score}</div>
            <button id="button" className={styles.cookieButton} onClick={scoreUp}>Click me!</button>
            <label className={styles.info} htmlFor="button">Grandmas: {grandmas}</label>
            <button className={styles.upgrade} onClick={buyGrandma} disabled={score < grandmaCost}>
                Buy grandma ({grandmaCost})
            </button>
        </section>
    )
}