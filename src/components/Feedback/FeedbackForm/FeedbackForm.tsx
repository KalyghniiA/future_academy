import styles from "./FeedibackForm.module.css";
import {Button} from "../../Button/Button.tsx";
import cn from "classnames";

export function FeedbackForm() {
	return (
		<form className={styles.form}>
			<label className={styles.label} htmlFor={"input_name"}>Ваше имя</label>
			<input type={"text"} placeholder={"Ваше имя"} id={"input_name"} className={cn(styles.input, styles["input__name"])}/>
			<label className={styles.label} htmlFor={"input_phone"}>Ваш телефон</label>
			<input type={"tel"} placeholder={"Ваш телефон"} id={"input_phone"} className={cn(styles.input, styles["input__phone"])}/>
			<label className={styles.label} htmlFor={"input_phone"}>Ваш e-mail</label>
			<input type={"email"} placeholder={"Ваш e-mail"} id={"input_phone"} className={cn(styles.input, styles["input__email"])}/>
			<p className={styles.text}>Нажимая на кнопку, я соглашаюсь на обработку персональных данных и с правилами пользования Платформой</p>
			<Button>Отправить</Button>
		</form>
	);
}