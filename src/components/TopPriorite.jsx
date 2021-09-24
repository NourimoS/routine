import React from 'react'
// import CountDown from './CountDown'
import Countdown from 'react-countdown';

const TopPriorite = ({
    title,
    timeToFinish
}) => {
    const wordsInTitle = title.split(' ').length;
    const duration = wordsInTitle*2
    return (
        <>
        <div className="w-full  overflow-hidden">
            <h2 className="p-4 text-8xl w-max animate-slide " style={{animationDuration:`${duration}s`}}>{title}</h2>
            
        </div>
            <Countdown className="text-2xl py-2" date={timeToFinish}>
                <button className="m-auto btn bg-yellow-300 text-yellow-900 rounded-full">set Done</button>
            </Countdown>
        </>
    )
}

export default TopPriorite
