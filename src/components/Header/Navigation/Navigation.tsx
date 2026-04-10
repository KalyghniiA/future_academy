import styles from "./Navigation.module.css";
import {Link} from "react-router-dom";
import cn from "classnames";

export function Navigation() {
	return (
		<nav>
			<ul className={styles["nav-list"]}>
				<li className={cn(styles["nav__item"], styles["nav__item--menu"])}>
					<img src={"/public/course_burger.svg"} alt="menu" />
					<Link to="/cources">Все курсы</Link>
				</li>
				<li className={styles["nav__item"]}>
					<Link to={"/events"}>Мероприятия</Link>
				</li>
				<li className={styles["nav__item"]}>
					<Link to={"/cognition"}>Базы знаний</Link>
				</li>
				<li className={styles["nav__item"]}>
					<Link to={"/career"}>Карьера</Link>
				</li>
			</ul>
		</nav>


	);
}