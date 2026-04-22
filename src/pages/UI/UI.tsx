import styles from "./UI.module.css";
import {Button} from "../../components/Button/Button.tsx";
import {Feedback} from "../../components/Feedback/Feedback.tsx";

export function Ui () {
	return (
		<div className={styles.container}>
			<Button>Кнопка</Button>
			<Feedback headerText={"Тестовый заголовок"} text={"Оставьте заявку и наши специалисты свяжутся с вами, ответят на все вопросы и подберут подходящий вариант обучения."} />
		</div>
	);
}