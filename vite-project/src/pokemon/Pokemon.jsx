import { useEffect, useState } from 'react'
import styles from './Pokemon.module.css';

const TYPE_CLASS_MAP = {
    normal: styles.normal,
    fighting: styles.fighting,
    flying: styles.flying,
    fire: styles.fire,
    water: styles.water,
    grass: styles.grass,
    poison: styles.poison,
    dark: styles.dark,
    electric: styles.electric,
    psychic: styles.psychic,
    ice: styles.ice,
    bug: styles.bug,
    rock: styles.rock,
};


export function Pokemon() {
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/1")
            .then((response) => response.json())
            .then((data) => {
                setPokemon(data);
            })
    }, [])

    if (pokemon === null) {
        return (
            <section className={styles.pokemon}>
                <h2>Fetching Pokemon</h2>
            </section>
        );
    }

    return (
        <section className={styles.pokemon}>
            <h2 className={styles.name}>{pokemon.name}</h2>
            <img className={styles.sprite} src={pokemon.sprites.front_default} alt={pokemon.name} />
            <div className={styles.card}>
                <h3 className={styles.sectionTitle}>Types</h3>
                <ul className={styles.typesList}>
                    {pokemon.types.map((type) => (
                        <li key={type.type.name} className={`${styles.typeItem} ${TYPE_CLASS_MAP[type.type.name] || ''}`}>
                            {type.type.name}
                        </li>
                    ))}
                </ul>
                <h3 className={styles.sectionTitle}>Stats</h3>
                <ul className={styles.stats}>
                    {pokemon.stats.map((stat) => (
                        <li key={stat.stat.name} className={styles.statRow}>
                            <p>{stat.stat.name}:</p>
                            <p>{stat.base_stat}</p>
                        </li>
                    ))}
                </ul>
                <h3 className={styles.sectionTitle}>Moves</h3>
                <ul className={styles.movesList}>
                    {pokemon.moves.slice (0,5 ). map((move) => (
                        <li key={move.move.name}>{move.move.name}</li>
                    ))}
                </ul>
            </div>
        </section>
    )
};


