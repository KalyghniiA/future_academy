import styles from "./ButtonMenu.module.css";

export function ButtonMenu() {
	return (
		<button className={styles.btn}>
			<img src={"/public/menu_burger.svg"} alt="menu" />
		</button>
	);
}