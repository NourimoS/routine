import React from 'react'

const Model = ({onClose,children}) => {
    return (
        <div onClick={()=>onClose()}  className="w-screen h-screen bg-black bg-opacity-75 absolute top-0 left-0 flex justify-center items-center">
            {children}
        </div>
    )
}

export default Model
