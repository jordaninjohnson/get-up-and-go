import React, { useState } from 'react';
import './App.css';
import Wounds from './components/Wounds/Wounds';
import NewExpense from './components/NewWound/NewWound';
import NewWound from './components/NewWound/NewWound';

const DUMMY_WOUNDS = [
  { title: 'cut', amount: 1, date: new Date() },
  { title: 'burn', amount: 2, date: new Date() },
  { title: 'break', amount: 3, date: new Date() },
];

function App() {
  const [wounds, setWounds] = useState(DUMMY_WOUNDS);

  const addWoundHandler = wound => {
    setWounds((prevWounds) => {
      return [wound, ...prevWounds];
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <NewWound onAddWound={addWoundHandler}/>
        <Wounds items={wounds} />
      </header>
    </div>
  );
}

export default App;
