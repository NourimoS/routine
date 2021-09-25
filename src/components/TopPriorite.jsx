import React from 'react'
// import CountDown from './CountDown'
import Countdown from 'react-countdown';
import RoundedButton from './RoundedButton';

const TopPriorite = ({
    title,
    timeToFinish,
    done,
    onSetDone
}) => {
    const wordsInTitle = title.split(' ').length;
    const duration = wordsInTitle*2
    return (
        <>
        {!done &&<div className="w-full flex items-center  overflow-hidden">
            <Countdown className="text-2xl py-2" date={timeToFinish}>
                
                <div className="mr-4">
                    <RoundedButton
                    onClick={onSetDone}
                    bgColor="bg-yellow-300 text-yellow-900"
                    borderColor="border-yellow-400"
                    >
                        <b>Set Done</b>
                    </RoundedButton>
                </div>
            </Countdown>
            <div className="overflow-hidden rounded-full p-1 border-yellow-300 border-8">
            
            <div className="rounded-full overflow-hidden">
                <h2 className="text-7xl whitespace-nowrap w-max animate-slide" style={{animationDuration:`${duration}s`}}>{title}</h2>
            </div>
            </div>
            
        </div>
        }
        </>
    )
}

export default TopPriorite
