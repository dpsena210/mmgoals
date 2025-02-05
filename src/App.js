import logo from './logo.svg';
import './App.css';
import AllGoals from './Components/AllGoals';
import './Styles/buttons.css'
import './Styles/users_interact.css'
import CardGoal from './Components/CardGoal';
import AddButton from './Components/AddButton';
import NewGoal from './Components/NewGoal';
import { useState } from 'react';
function App() {
  const [openNewGoal, setOpenNewGoal] = useState(false)
  const openAllGoals = ()=>{
    alert("ok")
}
  const handleOpenNewGoal= ()=>{
    setOpenNewGoal(true)
  }
  const handleCloseNewGoal = ()=>{
    setOpenNewGoal(false)
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
      <AddButton onClick={handleOpenNewGoal}></AddButton>
      <AllGoals/>
      <NewGoal open={openNewGoal} close={handleCloseNewGoal}/>
      
    </div>
  );
}

export default App;
