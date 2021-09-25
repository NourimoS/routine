import React from 'react'

const Iterator = ({data,renderAs,...rest}) =>{
    return (
        <>
            {
                data.map((el,i)=>renderAs({el,i}))
            }
        </>
        
        )
    }  

export default Iterator
