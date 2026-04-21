import type {Course} from "../../../interfaces/Course.interface.ts";

export interface CoursesListProps {
    header: string;
    courses: Course[];
}