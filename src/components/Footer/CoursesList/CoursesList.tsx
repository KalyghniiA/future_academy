import styles from "./CoursesList.module.css";
import type {Course} from "../../../interfaces/Course.interface.ts";
import type {CoursesListProps} from "./CoursesList.props.ts";
import {Link} from "react-router-dom";

export function CoursesList ({header, courses}: CoursesListProps) {

	return (
		<section className={styles.container}>
			<h4 className={styles.header}>{translation.has(header) ? translation.get(header) : "Курсы"}</h4>
			<ul>
				{courses.map((course: Course) => (
					<li key={course.id} className={styles.element}>
						<Link to={`/courses/${course.id}`}>{course.name}</Link>
					</li>
				))}
			</ul>
		</section>
	);
}

const translation = new Map(Object.entries({"child": "Детям", "teenager": "Подросткам", "adult": "Взрослым", "info": "Информация"}));
