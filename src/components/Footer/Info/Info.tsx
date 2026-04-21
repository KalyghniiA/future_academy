import styles from "./Info.module.css";
import {Link} from "react-router-dom";

export function Info() {
	return (
		<section className={styles.container}>
			<h4 className={styles.header}>Информация</h4>
			<ul>
				<li className={styles.element}>
					<Link to={"/about_academy"}>Об академии</Link>
				</li>
				<li className={styles.element}>
					<Link to={"/events"}>Мероприятия</Link>
				</li>
				<li className={styles.element}>
					<Link to={"/news"}>Новости</Link>
				</li>
				<li className={styles.element}>
					<Link to={"/knowledge_base"}>База знаний</Link>
				</li>
				<li className={styles.element}>
					<Link to={"/career"}>Карьера</Link>
				</li>
				<li className={styles.element}>
					<Link to={"/contacts"}>Контакты</Link>
				</li>
			</ul>
		</section>
	);
}