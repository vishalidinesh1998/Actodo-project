import { useState } from "react"

function TodolistForm({ activityArr, setactivityArry }) {
    const [newactivityArr, setnewactivityArr] = useState("")

    function handlechange(evt) {
        setnewactivityArr(evt.target.value)
    }

    function addnewlist() {
        setactivityArry([...activityArr, {
            id: activityArr.length + 1,
            activity: newactivityArr
        }])
         setnewactivityArr("");
    }

    return (
        <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-medium">Manage Activities</h1>
            <div>
                <input
                value={newactivityArr}
                    placeholder="Next Activity?"
                    className="border border-black p-2 bg-transparent"
                    onChange={handlechange}
                />
                <button
                    className="bg-black text-white p-2 border border-black"
                    onClick={addnewlist}
                >
                    Add
                </button>
            </div>
        </div>
    )
}

export default TodolistForm
