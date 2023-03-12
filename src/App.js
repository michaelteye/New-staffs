import './App.css';
import React, { useEffect, useState, useMemo } from 'react'

function App(){
  const [showEvents,setShowEvent] = useState(true)
  const [events, setEvents] = useState([
    {title: "the mass", description: "the 3rd world war", id:1},
    {title: "Web development", description: "Building more dynamic systems", id:2},
    {title: "3D animation", description: "building solid 3d animations using blender", id:3},
    {title: "Data Analysis", description: "Sorting out varities of data", id:4}

  ])
  console.log(showEvents);

  const handleClick = (id) =>{
    setEvents((prevEvents)=>{
      return prevEvents.filter((event)=>{
        return event.id !== id
      })
    })
 
    console.log(id)
  }



  return (
    <div className='App'>
      {showEvents && (
        <div>
           <button onClick={()=> setShowEvent(false)}>Hide event</button>
        </div>

      )}
      
      { !showEvents && (
        <div>
           <button onClick={()=> setShowEvent(false)}>show event</button>
        </div>

      )}
      
      

     
      {showEvents && events.map((event,index)=>(
        <div key={event.id}>
          <h1>{index}-{event.title}</h1>
          <button onClick={()=>handleClick(event.id)}>Delete Events</button>
        </div>
      ))}
    </div>
  )



}


export default App;
