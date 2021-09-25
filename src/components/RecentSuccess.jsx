import React from 'react'
import Iterator from './Iterator'
import SuccessItem from './SuccessItem'

const RecentSuccess = ({data}) => {
    return (
        <ul>

        <Iterator  data={data} renderAs={({el,i})=>(<SuccessItem  data={el}  ></SuccessItem>)}></Iterator>
        </ul>
                
    )
}

export default RecentSuccess
