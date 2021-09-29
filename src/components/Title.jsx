import React from 'react'

const Title = ({text,icon}) => {
    return (
        <h3 className="text-4xl mb-4 flex items-center">
				{icon()}
				<span className="ms-4">{text}</span>
		</h3>
    )
}

export default Title
