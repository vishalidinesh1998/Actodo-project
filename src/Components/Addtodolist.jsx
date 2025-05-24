import { useState } from "react"
import Todoitem from "./Todoitem"

function Addtodolist(props){
  

    const activityArr = props.activityArr
    const setactivityArry = props.setactivityArry



    return(
        <div className="bg-[#BDB4EA] border rounded p-2 flex-grow">
                <h1 className="font-semibold text-2xl">Today Activity</h1>
                
                {activityArr.length===0?<p>No activity yet</p>:""}
                {
                    activityArr.map((item,index)=>{
                        return <Todoitem 
                        id={item.id} activity={item.activity} index={index}
                         setactivityArry={setactivityArry} activityArr={activityArr}/>
                    })
                }
            </div>
            
    )
}
export default Addtodolist