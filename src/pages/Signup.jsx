import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Signup(props) {

    const navigate=useNavigate();

    const [eusername, seteusername] = useState("")
    const [epassword, setepassword] = useState("")
    const users = props.users
    const setusers = props.setusers

    function handleusername(evt) {
        seteusername(evt.target.value)
    }

    function handlepassword(evt) {
        setepassword(evt.target.value)
    }
    function addusers(){
        setusers([...users,{username:eusername,password:epassword}])
        navigate("/")
    }

    return (

        <div className="bg-black p-10">
            <div className="bg-white border rounded p-16 text-left">
                <h1 className="text-3xl font-semibold">Hey Hi</h1>
                <p>You Can Signup here :)</p>
                <div className="flex flex-col justify-between gap-5 mt-5">
                    <input type="text"
                        placeholder="username"
                        onChange={handleusername}
                        className=" w-52 border rounded border-black p-2 bg-transparent"
                    ></input>
                    <input type="text"
                        placeholder="Password"
                        onChange={handlepassword}
                        className="  w-52 border rounded border-black p-2 bg-transparent"
                    ></input>
                    <input type="text"
                        placeholder="Confirm Password"
                        className="  w-52 border rounded border-black p-2 bg-transparent"
                    ></input>
                </div>
                <button className="bg-orange-500 p-2 border rounded mt-5"
                onClick={addusers}
                >Sign Up</button>
                <p>Don't have an account? <Link to={"/"} className="underline">Login</Link> </p>
            </div>
        </div>
    )
}
export default Signup