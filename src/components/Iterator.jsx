import React from 'react'

const Iterator = ({data,children,...rest}) =>{
    return (
        <>
            {

        data.map((el,i)=>(<div  key={i}>{children({el,i})}</div>))
            }
        </>
        
        )
    }  

export default Iterator
