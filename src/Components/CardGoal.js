import '../Styles/cards.css'

function CardGoal({goal}){
    const handleGoalClick = ()=>{
        
    }
    return(
        <div className="card-goal" onClick={handleGoalClick}>
            <p className="title-card">
            {goal.titulo}
            </p>
            <p className="column-card">
             {goal.descricao}
             </p>
             <hr className='hr-bettwen'/>
            <p className="value-card">
             R$ {goal.valor} 
             </p>
             <div className='data-card'>
                {goal.data}
             </div>
             
        </div>
    )
}
export default CardGoal;