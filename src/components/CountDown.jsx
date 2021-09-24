// import React from 'react'

const CountDown = ({ends}) => {
    const offset = new Date().getTimezoneOffset()*60000
    let d = new Date(ends+offset-Date.now());
    const formater = new Intl.DateTimeFormat(navigator.language,{
        hour12:false,
        timeStyle:"medium",        
    })
    // const h = d.getHours();
    // const mn = d.getMinutes();
    // const sec = d.getSeconds();
    const formated = formater.format(d)
    
    return (
        <span className="py-2 px-4 text-2xl">
            {formated}
        </span>
    )
}

export default CountDown
