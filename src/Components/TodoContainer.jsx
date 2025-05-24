import Addtodolist from "./Addtodolist"
import TodolistForm from "./TodolistForm"
import { useState } from "react"
function TodoContainer(){

    
        const [activityArr,setactivityArry]=useState([
            {
                id:1,
                activity:"Go to walk"
            },
            {
                id:2,
                activity:"Take bath"
            },
            {
                id:3,
                activity:"go to eat"
            }
        ])

    return(
        <div>
            <div className="flex flex-wrap gap-5">
            <TodolistForm activityArr={activityArr} setactivityArry={setactivityArry}/>
            <Addtodolist activityArr={activityArr} setactivityArry={setactivityArry}/>
            </div>
        </div>
    )
}
export default TodoContainer