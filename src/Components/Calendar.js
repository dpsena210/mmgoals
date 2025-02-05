import { useState } from "react"

function Calendar({sendDate}){
    const [selectedDate,setSelectedDate] = useState("")

    const catchDate=(value)=>{
        sendDate(value);
        setSelectedDate(value)
    }
    return (
        
        <input className="calendar" value={selectedDate}
        onChange={(e) => catchDate(e.target.value)} type='date'></input>

    )
} export default Calendar