import React from 'react'
import Iterator from './Iterator.jsx'
import NewItem from './NewItem.jsx';
import RoutineItem from './RoutineItem.jsx'


const MyRoutine = ({routines,setDone,onAddNew}) => {
    
    
    return (
        <>
            <h3 className=" py-6 text-4xl">My routine</h3>
            <ul className="flex py-4 w-full overflow-x-scroll">

            <NewItem onAddNew={onAddNew}></NewItem>
            <Iterator  data={routines} renderAs={({el,i})=>(<RoutineItem onSetDone={()=>setDone(i)} key={i}  {...el}  ></RoutineItem>)}>
            </Iterator>
            </ul>
            
        </>
    )
}

export default MyRoutine
