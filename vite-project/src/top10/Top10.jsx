import styles from './Top10.module.css'
import { Top10Item } from './Top10Item'

let top10 = [
    { title: "The Final Empire", author: "Brandon Sanderson" },
    { title: "The Way of Kings", author: "Brandon Sanderson" },
    { title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling" },
    { title: "The Hobbit", author: "J.R.R. Tolkien" },
    { title: "The Fellowship of the Ring", author: "J.R.R. Tolkien" },
    { title: "Saga", author: "Brian K Vaughan" },
    { title: "52", author: "Geoff Johns, Grant Morrison, Greg rucka, Mark Waid, Keith Giffen" },
    { title: "Bad As I Wanna Be", author: "Dennis Rodman, Tim Keown" },
    { title: "Kono Subarashii Sekai ni Shukufuku wo! Oh! My Useless Goddess!", author: "Natsume Akatsuki" },
    { title: "So I'm a Spider, So What?", author: "Okina Baba" }
];


export function Top10() {
    return (
		<section className={styles.top10}>
			<h2>Top 10 Books "lijst is gemaakt met AI"</h2>
			<ol className={styles.list}>
				{top10.map((item, index) => {
					return <Top10Item title={item.title} author={item.author} number={index + 1} />
				})}
			</ol>
		</section>

    )
}
