import '../Styles/buttons.css'
import CardGoal from '../Components/CardGoal'
import goals from '../goals.json'

function AllGoals(){
     
  
    return(

        goals != "" ? (goals.map((obj)=> <CardGoal  goal={obj}/> ) ):(null) 
    )
}
export default AllGoals