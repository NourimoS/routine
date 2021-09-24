import React from 'react'

const RoutineItem = ({name,times,done,onSetDone}) => {
    return (
        <div onClick={onSetDone}  className={`mr-4 p-1  text-center border-8 ${done?'border-gray-300 cursor-not-allowed':'border-green-300 cursor-pointer'}  rounded-full text-gray-700`} >
            <div className="px-5 py-2 w-min bg-white rounded-full">
            <p className="text-3xl">{times}</p>
            <p className="text-sm whitespace-nowrap w-8 overflow-hidden text-gray-400" >{name}</p>
            
            </div>
        </div>
    )
}

export default RoutineItem
