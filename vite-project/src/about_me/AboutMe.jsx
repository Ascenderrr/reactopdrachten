import styles from "./aboutme.module.css";

export function AboutMe() {
    return (
        <article className={styles.aboutMe}>
            <h1 className={styles.aboutMe__title}>Ik ben Othman</h1>
            <div className={styles.aboutMe__layout}>
                <img className={styles.aboutMe__image} src="/geit.webp" alt="geit" />
                <p className={styles.aboutMe__paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti tenetur iure commodi perspiciatis. Tempore alias laboriosam iusto asperiores minima rem, placeat hic vitae nemo aliquid velit recusandae corrupti delectus! Numquam?</p>
            </div>
        </article>
    )
}
