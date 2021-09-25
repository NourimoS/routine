import React, { useState } from 'react'
import MyRoutine from './MyRoutine.jsx'
import TopPriorite from './TopPriorite.jsx'
import Overlay from './Overlay.jsx'
import NewHabitForm from './NewHabitForm.jsx'
import RecentSuccess from './RecentSuccess.jsx'
const App = () => {
    const topData = {
        title: "finish the annual brief",
        timeToFinish: Date.now()+15000
    }
    const initialRoutines = [{
        id:1,
        name:'gym',
        times:10,
        done:false,
    },{
        id:2,
        name:'books',
        times:5,
        done:true,
    },{
        id:3,
        name:'social',
        times:3,
        done:false,
    },{
        id:4,
        name:'finish podcast',
        times:7,
        done:true
    }];
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
    return (
        <>
            <MyRoutine routines={routines} setRoutines={setRoutines} onAddNew={()=>setShowOverlay(true)}></MyRoutine>
            <TopPriorite onSetDone={()=>setHideTopProp(true)} done={hideTopProp} {...topData}></TopPriorite>
            {openModel&&(<Overlay onClose={()=>setShowOverlay(false)} >
                <NewHabitForm onCreate={(e)=>createNewRoutine(e)} onCancel={e=>cancelCreation(e)}></NewHabitForm>
            </Overlay>)}
            <RecentSuccess data={[1,2,3]}></RecentSuccess>
        </>
    )
}

export default App
