import React, { useState } from 'react'
import MyRoutine from './MyRoutine.jsx'
import TopPriorite from './TopPriorite.jsx'
import Overlay from './Overlay.jsx'
import NewHabitForm from './NewHabitForm.jsx'
import RecentSuccess from './RecentSuccess.jsx'
const App = () => {
    const topData = {
        title: "finish the annual brief",
        timeToFinish: 1632811929780,
        get startValue(){return this.timeToFinish-Date.now()}
    }
    const initialRoutines = [{
        id:1,
        name:'gym',
        times:10,
        done:false,
    },{
        id:2,
        name:'15mn book read',
        times:5,
        done:true,
    },{
        id:3,
        name:'talk to a stranger',
        times:3,
        done:false,
    },{
        id:4,
        name:'finish podcast',
        times:7,
        done:true
    }];

    const initialRecentSuccess = [
        {
        id:0,
        name:'Total',
        score: 10
    },
    {
        id:3,
        name:'finish a book',
        score: 1
    },
    {
        id:4,
        name:'have a cold shower',
        score: 2
    },
    {
        id:22,
        name:'make a new relationship',
        score: 5
    },
    {
        id:11,
        name:'serve a person',
        score: 2
    },
]

    const [routines, setRoutines] = useState(initialRoutines);
    const [openModel, setShowOverlay] = useState(false)
    const [hideTopProp, setHideTopProp] = useState(false)
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
        setShowOverlay(false)
        
    }
    const cancelCreation=e=>{
        setShowOverlay(false)
    }
    const setDone= (index)=>{
        let copy =[...routines];
        if(!copy[index].done){
        copy[index].done= true;
        copy[index].times++;
        
        setRoutines(copy);
        }
    }
    return (
        <>
            <MyRoutine routines={routines} setDone={setDone} onAddNew={()=>setShowOverlay(true)}></MyRoutine>
            <TopPriorite onSetFinished={()=>setHideTopProp(true)} done={hideTopProp} {...topData}></TopPriorite>
            {openModel&&(<Overlay onClose={()=>setShowOverlay(false)} >
                <NewHabitForm onCreate={(e)=>createNewRoutine(e)} onCancel={e=>cancelCreation(e)}></NewHabitForm>
            </Overlay>)}
            <RecentSuccess data={initialRecentSuccess}></RecentSuccess>
        </>
    )
}

export default App
