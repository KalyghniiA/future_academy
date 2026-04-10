import { Link } from "react-router-dom";
import styles from "./Auth.module.css";

export function Auth () {
	return (
		<Link to={"/auth"} className={styles.link}>
			<img src={"/public/avatar.png"} alt="avatar" />
            Войти
		</Link>
	);
}