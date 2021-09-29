import React from 'react'
import RoundedButton from './RoundedButton'

const SuccessItem = ({data,index}) => {
    const duration= data.name.split(' ').length;
    
    return (
        <li className={`pe-4 py-2 text-2xl ${index===0 && 'border-e-2 border-opacity-50 me-4'} `}>
            
            <RoundedButton
            borderColor="border-green-400"
            >
                <div className="flex flex-col justify-center items-center">
                    <span className="whitespace-nowrap text-gray-100 animate-slide text-3xl" style={{animationDuration:`${duration>1 && duration*2}s`}}>{data.name}</span>
                    <b className="text-green-400">+{data.score}</b>
                </div>

            </RoundedButton>
        </li>
    )
}

export default SuccessItem
