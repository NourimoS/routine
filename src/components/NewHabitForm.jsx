import React from 'react'

const NewHabitForm = ({onCreate,onCancel}) => {
    return (
        <div onClick={e=>e.stopPropagation()} className="bg-white px-4 py-8 mx-4 w-full  md:w-1/3 rounded-sm">
                    <h3 className="text-gray-900 text-2xl mb-2">New Routine</h3>
                    <form onSubmit={(e)=>onCreate(e)}>
                        <div className="mb-2">
                        <label htmlFor="habitName" className="text-blue-900 block mb-2">routine name</label>
                        <input name="habitName" autoFocus type="text" className="border-2 border-blue-400 placeholder-blue-400 text-blue-400" maxLength="20" placeholder="routine name" />
                        </div>
                        <div className="mb-2">
                            <input type="checkbox" name="notify" className="mr-2" />
                            <label htmlFor="notify" className="text-blue-900 mb-2">notify?</label>
                        </div>
                        <input className="btn bg-blue-300 text-blue-900 border-blue-400 border-2" type="submit" value="Create"></input>
                        <button onClick={()=>onCancel()} className="btn text-blue-900" >Cancel</button>
                    </form>
                </div>
    )
}

export default NewHabitForm
