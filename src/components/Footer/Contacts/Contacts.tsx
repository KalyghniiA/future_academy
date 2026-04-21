import styles from "./Contacts.module.css";
import {Logo} from "../../Logo/Logo.tsx";
import {Social} from "./Social/Social.tsx";

export function Contacts() {
	return (
		<section className={styles.section}>
			<Logo theme={"dark"} className={styles.logo} />
			<a href={"tel:+78009503398"} className={styles.phone}>8 800 950-33-98 </a>
			<p className={styles.text}>г. Москва, ул. Ленина, д. 50</p>
			<a href={"mailto:info@hodfutureacademy.ru"} className={styles.text}>info@hodfutureacademy.ru</a>
			<Social />
			<span className={styles.copywriting}>© ХОД, Future Academy</span>
		</section>
	);
}