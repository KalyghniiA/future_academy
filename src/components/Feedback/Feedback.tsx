import styles from "./Feedback.module.css";
import {FeedbackForm} from "./FeedbackForm/FeedbackForm.tsx";
import type {FeedbackProps} from "./Feedback.props.ts";

export function Feedback({headerText, text}: FeedbackProps) {
	return (
		<section className={styles.container}>
			<div className={styles["image-container"]}>
				<picture>
					<source srcSet={"./public/owl.png"} className={styles["image"]} media={"(min-width: 961px)"} />
					<img src={"./public/owl_mini.png"} alt={"owl"}/>
				</picture>
			</div>
			<div className={styles["text-container"]}>
				<h3 className={styles.header}>{headerText}</h3>
				<p className={styles.text}>{text}</p>
			</div>
			<FeedbackForm />
		</section>
	);
}