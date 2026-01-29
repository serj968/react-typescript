import CourseGoalList from './components/CourseGoalList.tsx';
import goalsImg from './assets/goals.jpg';
import Header from './components/Header.tsx';
import { useState } from 'react';

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

export default function App() {

  const [goals, setGoals] = useState<CourseGoal[]>([]);


  function handleAddGoal() {

    setGoals((prevGoals) => {

      const newGoal: CourseGoal = {
        title: 'Learn React +TS',
        description: 'Learn it in depth!',
        id: prevGoals.length + 1,
      };

      return [...prevGoals,
        newGoal,
      ];
    });
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}> Add Goal</button>
      <CourseGoalList goals={goals} />

    </main>
  );
}
