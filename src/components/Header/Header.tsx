import styles from "./Header.module.css";
import {Navigation} from "./Navigation/Navigation.tsx";
import {Logo} from "../Logo/Logo.tsx";
import {ButtonLocation} from "./ButtonLocation/ButtonLocation.tsx";
import {Auth} from "./Auth/Auth.tsx";
import {ButtonMenu} from "./ButtonMenu/ButtonMenu.tsx";

export function Header() {
	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<Logo theme={"light"} className={styles.logo}/>
				<ButtonMenu />
				<Navigation />
				<ButtonLocation />
				<a href={"tel:+78009503398"} className={styles.phone}>8 800 950-33-98 </a>
				<Auth />
			</header>
		</div>
	);
}