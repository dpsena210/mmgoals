import { useState,useEffect } from "react";
import Calendar from "./Calendar";
import Input from "./Input";
import Progresso from "./Progresso";

function NewGoal({open,close,save}){

    const [titleGoals,setTitleGoals] = useState(null)
    const [descriptionGoals,setDescriptionGoals] = useState(null)
    const [finalValueGoals,setFinalValueGoals] = useState(null)
    const [selectedDate, setSelectedDate] = useState("");
    const [today,setToday] =useState("");

    const [mensalValue,setMensalValue] = useState(null)
    const [intervalDate,setIntervalDate] = useState(null)
    const [intervalDays, setIntervalDays] = useState(null)

    const atualizarDate = (newValue)=>{
        
        const splits = newValue.split("-")
        const ano = Number(splits[0]);
        const mes = Number(splits[1]);
        const dia = Number(splits[2]);
        var meses_intervalo = 0 
        const intervalo = ano - today[1]   

        if(intervalo>0){
            const  meses_objetivo = (ano-1)*12 +(mes);
            const meses_hoje = ((Number(today[1])-1)*12)+(Number(today[0]));
            
            setIntervalDate(meses_objetivo-meses_hoje);
           

        }
        else{
            const meses_intervalo = mes-today[0];
            setIntervalDate(meses_intervalo);
            console.log("intervalo de meses",meses_intervalo)

        }
        
    }
    useEffect(()=>{
        const hoje = new Date();
        const dia = String(hoje.getDate()).padStart(2, "0");
        const mes = String(hoje.getMonth() + 1).padStart(2, "0"); 
        const ano = hoje.getFullYear();

        setToday([mes,ano,dia])

    
    },[])
    return(
        <div >
        {open? (
           <div className="new-goal-dialog-background">
               <div className="new-goal-dialog">
                    <div className="content-new-goal">
                        <div className="div-inputs">
                            <p className="title-goals" >Título Objetivo</p>
                            <Input classname='input-goals' value={titleGoals} onChange={(e)=>setTitleGoals(e.target.value)}></Input>
                            <p className="title-goals"  >Descrição</p>
                            <Input classname='description-goals'  value={descriptionGoals} onChange={(e)=>setDescriptionGoals(e.target.value)}></Input>
                            <p className="title-goals" >Valor Total Necessário</p>
                            <Input classname='value-goals' value={finalValueGoals} onChange={(e)=>setFinalValueGoals(e.target.value)}></Input>
                            <p  className='title-goals'>Data final objetivo</p>
                            <Calendar sendDate={atualizarDate} className='calendar'></Calendar>
                            <p className='title-goals'>Valor investido mensalmente</p>
                            <Input classname='value-goals' value={mensalValue} onChange={(e)=>setMensalValue(e.target.value)}></Input>


                        </div>
                        <div className="divider"> </div>
                        <div className="div-linha-tempo">
                            <p className="title-linha-tempo">Linha do tempo</p>
                            <Progresso numeroDeDivisoes={10} numeroDePartesPreenchidas={2}></Progresso>

                        </div>
                    </div>
                    
               
           </div>
           <div className='div-actions-new-goal-dialog'>
                        <div save={save} >
                            <button className="button-save-new-dialog" onClick={(e) => { e.stopPropagation(); save(); }}  >Salvar</button>
                        </div>
                        <div close={close} >
                            <button className="button-close-new-dialog"  onClick={(e) => { e.stopPropagation(); close(); }}  >Fechar</button>
                        </div>
                        </div>
                    </div>
            
            ):(null)}
        </div>
    )
} export default NewGoal