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
};


export function Pokemon() {
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/arceus")
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
            <img src={pokemon.sprites.front_default} />
            <div className='card'>
                <h3>Types</h3>
                <ul>
                    {pokemon.types.map((type) => (
                        <li key={type.type.name} className={TYPE_CLASS_MAP[type.type.name]}>
                            {type.type.name}
                        </li>
                    ))}
                </ul>
                <h3>Stats</h3>
                <ul className={styles.stats}>
                    {pokemon.stats.map((stat) => (
                        <li key={stat.stat.name}>
                            <p>{stat.stat.name}:</p>
                            <p>{stat.base_stat}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
};


