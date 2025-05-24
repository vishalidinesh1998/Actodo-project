import Header from '../Components/Header'
import TodoContainer from "../Components/TodoContainer"
import Card from "../Components/Card"
import { useLocation } from "react-router-dom"
function Landing(){
const data=useLocation()

    return(  <div className="bg-black p-16 flex flex-col justify-between">
      <div className="bg-white border rounded p-16 text-black w-full h-auto">
        <Header name={data.state.user} />
        <div className="flex justify-between items-center flex-wrap gap-7">
          <Card bgcolor={"#8272DA"} title={"23"} subtitle={"Chennai"} />
          <Card bgcolor={"#EF4444"} title={"December"} subtitle={"14:02:34"} />
          <Card bgcolor={"#F97316"} title={"Build Using"} subtitle={"React"} />
        </div>
        <div>
          <TodoContainer/>
        </div>
       
      </div>
    </div>)
}
export default Landing