import React, { useState } from 'react'
import MyRoutine from './MyRoutine.jsx'
import TopPriorite from './TopPriorite.jsx'
import Model from './Model.jsx'
import NewHabitForm from './NewHabitForm.jsx'
const App = () => {
    const topData = {
        title: "finish the annual brief",
        timeToFinish: Date.now()+15000
    }
    const initialRoutines = [{
        name:'gym',
        times:10,
        done:false,
    },{
        name:'books',
        times:5,
        done:true,
    },{
        name:'social',
        times:3,
        done:false,
    },{
        name:'finish podcast',
        times:7,
        done:true
    }];
    const [routines, setRoutines] = useState(initialRoutines);
    const [openModel, setOpenModel] = useState(false)
    const createNewRoutine=(e)=>{
        //cancel form submition
        e.preventDefault();
        const formEl = e.target;
        const formData= new FormData(formEl);
        const routineName =formData.get("habitName");
        const notify =formData.get("notify")==="on";
        const routineData= {
            name:routineName,
            times:1,
            done:false,
            notify,
        }
        setRoutines([...routines,routineData])
        formEl.reset();
        setOpenModel(false)
        
    }
    const cancelCreation=e=>{
        setOpenModel(false)
    }
    return (
        <>
            <MyRoutine routines={routines} setRoutines={setRoutines} onAddNew={()=>setOpenModel(true)}></MyRoutine>
            <TopPriorite {...topData}></TopPriorite>
            {openModel&&(<Model onClose={()=>setOpenModel(false)} >
                <NewHabitForm onCreate={(e)=>createNewRoutine(e)} onCancel={e=>cancelCreation(e)}></NewHabitForm>
            </Model>)}
                
        </>
    )
}

export default App
