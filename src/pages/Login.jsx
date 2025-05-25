import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Login(props) {
const navigate=useNavigate();

    const [eusername, seteusername] = useState("")
    const [epassword, setepassword] = useState("")
    const [ruser, setruser] = useState(true)

 const users=props.users
 const setusers=props.setusers

    function handleusername(evt) {
        seteusername(evt.target.value)
    }

    function handlepassword(evt) {
        setepassword(evt.target.value)
    }

function checkuser() {
    var userfound = false;

        if (eusername.trim() === "" || epassword.trim() === "") {
        alert("Please enter both username and password");
        return;
    }

    users.forEach(function(item){
        if(item.username === eusername && item.password === epassword){
            console.log("Login Successful");
            userfound = true;
        }
    });

    if (userfound) {
        navigate("/landing",{state:{user:eusername}}); 
    } else {
        console.log("Login failed");
        setruser(false);
    }
}



    return (
        <div className="bg-black p-10">
            <div className="bg-white border rounded p-16 text-left">
                <h1 className="text-3xl font-semibold">Hey Hi</h1>

                {ruser ? (
                    <p>I help you manage your activities after you login :)</p>
                ) : (
                    <p className="text-red-700 text-sm">Please sign up before Login</p>
                )}

                <div className="flex flex-col justify-between gap-5 mt-5">
                    <input
                        type="text"
                        placeholder="username"
                        value={eusername}
                        onChange={handleusername}
                        className="w-52 border rounded border-black p-2 bg-transparent"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={epassword}
                        onChange={handlepassword}
                        className="w-52 border rounded border-black p-2 bg-transparent"
                    />
                </div>

                <button
                    className="bg-[#8272DA] p-2 border rounded mt-5"
                    onClick={checkuser}
                >
                    Login
                </button>

                <p>Don't have an account? <Link to={"/signup"} className="underline">Sign Up</Link></p>
            </div>
        </div>
    )
}

export default Login
