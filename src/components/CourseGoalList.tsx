import CourseGoal from "./CourseGoal";
import { CourseGoal as CGoal } from "../App";


export default function CourseGoalList({ goals }: { goals: CGoal[] }) {
    return (<ul>
        {
            goals.map((goal) => (
                <li key={goal.id}>
                    <CourseGoal title={goal.title}>
                        <p>{goal.description}</p>
                    </CourseGoal>
                </li>
            ))}
    </ul>
    );
}