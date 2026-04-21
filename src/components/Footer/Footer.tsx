import styles from "./Footer.module.css";
import {Contacts} from "./Contacts/Contacts.tsx";
import type {Course} from "../../interfaces/Course.interface.ts";
import { useState} from "react";
import {CoursesList} from "./CoursesList/CoursesList.tsx";
import {Info} from "./Info/Info.tsx";

export function Footer() {



	const [coursesListsData] = useState(() => {
		const map = new Map<string, Course[]>();

		courses.forEach(course => {
			course.category.forEach(elem => {
				if (map.has(elem)) {
					map.get(elem)?.push(course);
				} else {
					map.set(elem, [course]);
				}
			});
		});
		return map;
	});


	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<Contacts />

				{[...coursesListsData.keys()].map(category => {

					const courses = coursesListsData.get(category);
					if (courses) {
						return (
							<CoursesList header={category} courses={courses} key={category}/>
						);
					}
				})}
				<Info />
			</div>

		</footer>
	);
}

const courses: Course[] = [
	{
		id: 0,
		name: "Робототехника",
		link: "/course?id=0",
		category: ["child"]
	},
	{
		id: 1,
		name: "Создание игр",
		link: "/course?id=1",
		category: ["child", "teenager", "adult"]
	},
	{
		id: 2,
		name: "Программирование",
		link: "/course?id=2",
		category: ["child", "teenager", "adult"]
	},
	{
		id: 3,
		name: "Мультимедиа",
		link: "/course?id=3",
		category: ["child", "teenager", "adult"]
	},
	{
		id: 4,
		name: "Soft skills",
		link: "/course?id=4",
		category:["child", "teenager", "adult"]
	},
	{
		id: 5,
		name: "Шахматы",
		link: "/course?id=5",
		category: ["child"]
	},
	{
		id: 6,
		name: "Блогинг",
		link: "/course?id=6",
		category: ["child", "teenager"]
	},
	{
		id: 7,
		name: "Web-разработка",
		link: "/course?id=7",
		category: ["teenager"]
	},
	{
		id: 8,
		name: "Прикладное программирование",
		link: "/course?id=8",
		category: ["teenager"]
	},
	{
		id: 9,
		name: "Графическое моделирование",
		link: "/course?id=9",
		category: ["teenager"]
	},
	{
		id: 10,
		name: "Game Development",
		link: "/course?id=10",
		category: ["teenager"]
	},
	{
		id: 11,
		name: "Разработчик мобильных приложений",
		link: "/course?id=11",
		category: ["teenager"]
	},
	{
		id: 12,
		name: "Разработчик игр на Unity",
		link: "/course?id=12",
		category: ["adult"]
	},
	{
		id: 13,
		name: "Разработка ПО",
		link: "/course?id=13",
		category: ["adult"]
	},
	{
		id: 14,
		name: "Графический Дизайн",
		link: "/course?id=14",
		category: ["adult"]
	},
	{
		id: 15,
		name: "Тестировщик ПО",
		link: "/course?id=15",
		category: ["adult"]
	},
	{
		id: 16,
		name: "Интернет Маркетинг",
		link: "/course?id=16",
		category: ["adult"]
	},
	{
		id: 17,
		name: "Java-разработчик",
		link: "/course?id=17",
		category: ["adult"]
	},
	{
		id: 18,
		name: "Python–разработчик",
		link: "/course?id=18",
		category: ["adult"]
	},
	{
		id: 19,
		name: "IOS-разработчик",
		link: "/course?id=19",
		category: ["adult"]
	}];


