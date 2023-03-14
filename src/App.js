import './App.css';
import React, {useState} from 'react'
import Title from './components/Title';
import Modal from './components/Modal';

function App(){
  const [showModal,setShowModel] = useState(true)
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

  const handleClose = ()=>{
    setShowModel(false)
  }


  return (
    <div className='App'>
      <Title title="Michael Kingdom Events"  />
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
        <React.Fragment key={event.id}>
          <h1>{index}-{event.title}</h1>
          <button onClick={()=>handleClick(event.id)}>Delete Events</button>
        </React.Fragment>
      ))}
      {showModal && <Modal handleClose={handleClose}>
      <h2>Terms and Conditions</h2>
      <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
       Numquam vero accusamus adipisci. Natus velit corrupti enim excepturi 
       ab possimus voluptate perspiciatis laboriosam. Qui eligendi eius
        iste ad neque illo! Impedit.
      </p>
      <a href='£'>find out more...</a>
      </Modal>
      }

    </div>
  )



}


export default App;
