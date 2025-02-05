import logo from './logo.svg';
import './App.css';
import AllGoals from './Components/AllGoals';
import './Styles/buttons.css'
import CardGoal from './Components/CardGoal';
import AddButton from './Components/AddButton';
function App() {
  const openAllGoals = ()=>{
    alert("ok")
}
  return (
    <div className="App">
      <header>
        <div>
              <button className="header-buttons"  onClick={openAllGoals}>Todos os Objetivos</button>
              <button className="header-buttons"  onClick={openAllGoals}>Categorias</button>
              <button className="header-buttons"  onClick={openAllGoals}>Linha do Tempo</button>
          </div>
      </header>
      <AddButton></AddButton>
      <AllGoals/>
      
    </div>
  );
}

export default App;
