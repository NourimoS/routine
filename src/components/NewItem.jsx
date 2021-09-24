import React from 'react'

const NewItem = ({onAddNew}) => {
    return (
        <button onClick={onAddNew} className="mr-4 p-1  text-center border-8 border-blue-300 rounded-full cursor-pointer ">
            <div className="px-6 py-2 w-max bg-white rounded-full">
            <p className="text-3xl text-gray-700">+</p>
            <p className="text-sm text-gray-400" >new</p>
            
            </div>            
        </button>
    )
}

export default NewItem
