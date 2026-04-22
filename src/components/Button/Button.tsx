import styles from "./Button.module.css";
import type {ButtonProps} from "./Button.props.ts";
import cn from "classnames";

export function Button({type = "button", children}:ButtonProps) {
	return (
		<button className={cn(styles.btn)} type={type}>{children}</button>
	);
}