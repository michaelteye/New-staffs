import React from 'react'
import styles from './EventList.module.css'
export default function Events({events,handleClick}){
    return (
        <div>
             {
            events.map((event, index)=>(
                <div className={styles.card} key={event.id}>
                    <h1>{index}-{event.title}</h1>
                    <p>{event.location} - {event.date}</p>
                    <button onClick={()=>handleClick(event.id)}>Delete Events</button>
                </div>

            ))
        }
        </div>   
    )
}