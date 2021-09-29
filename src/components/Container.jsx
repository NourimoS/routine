import React from 'react'

const Container = ({children}) => {
    return (
        <div className="container m-auto px-4 sm:px-0">
            {children}
        </div>
    )
}

export default Container
