import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Routes ,Route } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Landing from './pages/Landing'

function App() {
  const [count, setCount] = useState(0)

     const [users, setusers] = useState([
        {
            username: "john",
            password: "1234"
        }
    ])

  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Login users={users} setusers={setusers}/>}/>
     <Route path='/signup' element={<Signup users={users} setusers={setusers}/>}/>
     <Route path='/landing' element={<Landing />}/>
  </Routes>
  </BrowserRouter>
  )
}

export default App
