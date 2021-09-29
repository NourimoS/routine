import React from 'react'
import Iterator from './Iterator.jsx'
import NewItem from './NewItem.jsx';
import RoutineItem from './RoutineItem.jsx'
import {FaSyncAlt} from 'react-icons/fa'
import Title from './Title.jsx';

const MyRoutine = ({routines,setDone,onAddNew}) => {
    
    
    return (
        <>
            <Title text="My routine" icon={FaSyncAlt} />
            <ul className="flex w-full overflow-x-scroll">

            <NewItem onAddNew={onAddNew}></NewItem>
            <Iterator  data={routines} renderAs={({el,i})=>(<RoutineItem onSetDone={()=>setDone(i)} key={i}  {...el}  ></RoutineItem>)}>
            </Iterator>
            </ul>
            
        </>
    )
}

export default MyRoutine
