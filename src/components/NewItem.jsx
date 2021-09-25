import React from 'react'
import RoundedButton from './RoundedButton'

const NewItem = ({onAddNew}) => {
    return (
        <li className="mr-4">
        <RoundedButton
        onClick={onAddNew}
        bgColor="bg-white"
        borderColor="border-blue-300"
        >
            <p className="text-3xl text-gray-700">+</p>
            <p className="text-sm text-gray-400" >new</p>
            

        </RoundedButton>
        
        </li>
    )
}

export default NewItem
