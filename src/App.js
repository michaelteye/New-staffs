import './App.css';
import React, {useState} from 'react'
import Title from './components/Title';
import Modal from './components/Modal';
import Events from './components/EventList';
import NewEventForm from './components/NewEventForm';

function App(){
  const [showModal,setShowModel] = useState(false)
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
           <button onClick={()=> setShowEvent(true)}>show event</button>
        </div>

      )}
      
      

     
      {showEvents && <Events events={events} handleClick={handleClick}/>}

     

      { !showModal && (
        <div>
          <button onClick={()=>setShowModel(true)}>show Model</button>
        </div>

      )}

      { showModal && (
        <div>
          <button onClick={()=>setShowModel(false)}>hide Model</button>
        </div>

      )}
      
      <div>
          {showModal && <Modal handleClose={handleClose} isSalesModal={true}>
         <NewEventForm/>
          <a href='#'>find out more...</a>
          </Modal>
          }
          <div>
            <button onClick={()=> setShowModel(true)}>Add New Events</button>
          </div>

      </div>
     

    </div>
  )



}

// don't let the model show by default when the page is load
// a button upon click show the model.


export default App;
