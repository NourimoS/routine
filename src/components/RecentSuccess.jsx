import React from 'react'
import Iterator from './Iterator'
import SuccessItem from './SuccessItem'

const RecentSuccess = ({data}) => {
    return (
        <div className="my-4">
            <h3 className="text-4xl mb-4">Recent Success</h3>
            <ul className="flex py-4 w-full overflow-x-scroll">
                
        <Iterator  data={data} renderAs={({el,i})=>(<SuccessItem  data={el} index={i} key={i}  ></SuccessItem>)}></Iterator>
        </ul>
        </div>
                
    )
}

export default RecentSuccess
