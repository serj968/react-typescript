// import { PropsWithChildren } from "react";

// //01 CourseGoal component with title prop and children
// type CourseGoalProps = PropsWithChildren<{ title: string }>;

// export default function CourseGoal({ title, children }: CourseGoalProps) {
//     return (
//         <article>
//             <div>
//                 <h2>{title}</h2>
//                 {children}
//             </div>
//             <button>Delete</button>
//         </article>
//     );
// }

// //------------------------------------------------------------------

// //02 CourseGoal component with explicit interface for props

// // interface CourseGoalProps {
// //   title: string;
// //   children: ReactNode
// // }

// // export default function CourseGoal({ title, children }: CourseGoalProps) {
// //     return (
// //         <article>
// //             <div>
// //                 <h2>{title}</h2>
// //                 {children}
// //             </div>
// //             <button>Delete</button>
// //         </article>
// //     );
// // }

// // //------------------------------------------------------------------

// // //03 CourseGoal FUNCTION Component as arrow function with PropsWithChildren
// // type CourseGoalProps = PropsWithChildren<{ title: string }>;

// // const CourseGoal:FC<CourseGoalProps> = ({ title, children }) => {
// //     return (
// //         <article>
// //             <div>
// //                 <h2>{title}</h2>
// //                 {children}
// //             </div>
// //             <button>Delete</button>
// //         </article>
// //     );
// // }

// // export default CourseGoal;