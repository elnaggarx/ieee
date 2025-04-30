import React from 'react'
import "./eventsCardStyles.css"
import { useRef } from 'react'
import { useScroll , useTransform , motion } from 'framer-motion'
const EventsCard = (props) => {
    const container = useRef(null)
    const {scrollYProgress} = useScroll({
        target:container,
        offset:['start end' , 'start start']
    })
    const scale  = useTransform(scrollYProgress , [0,1] , [2,1])
    const cardScale = useTransform(props.progress , props.range , [1,props.targetScale])
  return (
    <div ref={container} className='event-card-outer-container'>

        <motion.div style={{scale:cardScale,marginTop:`calc(-5% + ${props.i * 100}px)`}} className='event-card'>
                <h1 className='event-name'>{props.eventName}</h1>
                <div className='event-card-inner-container'>
                    <div className='event-desc-container'>
                    <h2>Season {props.season}</h2>
                    <p className='event-desc'>{props.eventDesc}</p>
                    <p className='event-date'>Date: {props.eventDate}</p>
                    <p className='event-location'>Location: {props.eventLocation}</p>
                    </div>
                    <div className='event-image-container'>
                        <motion.div style={{scale}} className='event-image-inner-container'>
                            <img src={props.image}  alt="error" />
                        </motion.div>
                    </div>
                </div>
            </motion.div>
    </div>
  )
}

export default EventsCard