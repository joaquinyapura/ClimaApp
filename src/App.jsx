import axios from "axios"
import { useState } from "react"
import { Weater } from "./Components/Weater"

function App() {

  const [data, setData] = useState({})
  const [location, setLocation] = useState("")

  const API_KEY ='7f9a638c1ccbe20b9b3a7ab4e7a84f02'
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`


  const searchLocation = (event)=>{
    if (event.key==="Enter") {
      axios.get(URL)
            .then((Response)=>{
              setData(Response.data)
            })
      setLocation("")

    }

  }
 

  return (

    <div className='w-screen h-screen relative  flex flex-col items-center bg-slate-800'>
      <div className='text-center p-4'>
        <input 
        onKeyDownCapture={searchLocation}
        onChange={(e)=>setLocation(e.target.value)}
        value={location}
        type="text" 
        className=' outline-none focus:border-b-2 border-y-0 border-x-0 border-solid  py-3 px-6 w-[700px] text-lg bg-slate-800 text-white'  placeholder='ingrese una ciudad' />
      </div>


    {
      data ? <Weater data={data} /> :null }
    
    </div>
  )

}

export default App
