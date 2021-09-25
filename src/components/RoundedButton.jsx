import React from 'react'

const RoundedButton = ({borderColor,bgColor,children ,...rest}) => {
    return (
        <button {...rest} className={`p-1 text-center border-8 rounded-full ${borderColor}`}>
            <div className={`w-20 h-20 flex flex-col justify-center items-center overflow-hidden rounded-full ${bgColor}`}>
            {children}
            </div>
        </button>
    )
}

export default RoundedButton
