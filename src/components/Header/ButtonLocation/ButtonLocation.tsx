import styles from "./ButtonLocation.module.css";

export function ButtonLocation() {
	return (

		<button className={styles.btn} type={"button"}>
			<img src={"/public/mark.png"} alt="mark" />
        Нижний Новнгород
			<img src={"/public/arrow.svg"} alt="arrow" />
		</button>

	);
}