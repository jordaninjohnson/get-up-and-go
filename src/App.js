import React, { useState } from 'react';
import './App.css';
import Wounds from './components/Wounds/Wounds';
import NewWound from './components/NewWound/NewWound';
import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList';
import CourseInput from './components/CourseGoals/CourseInput/CourseInput';

const DUMMY_WOUNDS = [
  { id: '1', title: 'cut', amount: 1, date: new Date() },
  { id: '2', title: 'burn', amount: 2, date: new Date() },
  { id: '3', title: 'break', amount: 3, date: new Date() },
];

function App() {
  const [courseGoals, setCourseGoals] = useState([
    { text: 'Do all exercises!', id: 'g1' },
    { text: 'Finish the course!', id: 'g2' }
  ]);

  const [wounds, setWounds] = useState(DUMMY_WOUNDS);

  const addWoundHandler = wound => {
    setWounds((prevWounds) => {
      return [wound, ...prevWounds];
    });
  };

  const addGoalHandler = enteredText => {
    setCourseGoals(prevGoals => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };

  const deleteItemHandler = goalId => {
    setCourseGoals(prevGoals => {
      const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let content = (
    <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
  );

  if (courseGoals.length > 0) {
    content = (
      <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
    );
  }


  return (
    <div className="App">
      <header className="App-header">
        <NewWound onAddWound={addWoundHandler} />
        <Wounds items={wounds} />
      </header>

      <div>
        <section id="goal-form">
          <CourseInput onAddGoal={addGoalHandler} />
        </section>
        <section id="goals">
          {content}
          {/* {courseGoals.length > 0 && (
          <CourseGoalList
            items={courseGoals}
            onDeleteItem={deleteItemHandler}
          />
        ) // <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
        } */}
        </section>
      </div>

    </div>
  );
}

export default App;
