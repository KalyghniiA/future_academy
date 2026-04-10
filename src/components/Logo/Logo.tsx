import styles from "./Logo.module.css";
import {Link} from "react-router-dom";

export function Logo() {
	return (
		<Link to="/" className={styles.logo}>
			<img src={"/public/Logo__dark.svg"} alt="logo" />
		</Link>
	);
}