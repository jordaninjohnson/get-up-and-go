import './App.css';
import Wounds from './components/Wounds';

function App() {
  const wounds = [
    {title: 'cut', amount: 1, date: new Date()},
    {title: 'burn', amount: 2, date: new Date()},
    {title: 'break', amount: 3, date: new Date()}
  ];
  return (
    <div className="App">
      <header className="App-header">
        <Wounds wounds={wounds}/>
      </header>
      
    </div>
  );
}

export default App;
