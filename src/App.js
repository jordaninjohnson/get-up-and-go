import './App.css';
import Wounds from './components/Wounds/Wounds';
import NewExpense from './components/NewWound/NewWound';

function App() {
  const wounds = [
    { title: 'cut', amount: 1, date: new Date() },
    { title: 'burn', amount: 2, date: new Date() },
    { title: 'break', amount: 3, date: new Date() },
  ];
  
  const addWoundHandler = wound => {
    console.log('In App.js');
    console.log(wound);
  }

  return (
    <div className="App">
      <header className="App-header">
        <NewExpense onAddWound={addWoundHandler}/>
        <Wounds wounds={wounds} />
      </header>
    </div>
  );
}

export default App;
