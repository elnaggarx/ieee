import React from 'react'
import HeroWithSlope from '../components/HeroWithSlope/HeroWithSlope'
import EventsCard from '../components/EventsCard/EventsCard'
import "../css/eventsStyles.css"
import event1 from "../assets/event1.jpg"
import event2 from "../assets/event2.jpg"
import event4 from "../assets/event4.webp"
import { motion , useScroll } from 'framer-motion'
import { useRef } from 'react'
const Events = () => {
    const container = useRef(null)
    const {scrollYProgress} = useScroll({
        target:container,
        offset:['start start' , 'end end']
    })
    const numberOfEvents = 3;
  return (
    <div>
        <HeroWithSlope pName="Our Events"></HeroWithSlope>
        <h1 className='events-header'>Take a look at our latest events</h1>

        <motion.div ref={container} className='events-cards-container'>
            <EventsCard i={0} progress={scrollYProgress} range={[0.333*0 , 1]} targetScale= {1-(numberOfEvents-0)*0.05} eventName="High Voltage" eventDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in enim sed eros sagittis ultricies non vitae enim. Morbi interdum vestibulum" image={event1} season="24/25" eventDate="29/2" eventLocation="AAST Sheraton Gamal Selim Hall"></EventsCard>
            <EventsCard i={1} progress={scrollYProgress} range={[0.33*1 , 1]} targetScale= {1-(numberOfEvents-1)*0.05} eventName="Ventus" eventDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in enim sed eros sagittis ultricies non vitae enim. Morbi interdum vestibulum" image={event2}  season="24/25" eventDate="1/5" eventLocation="AAST Sheraton Gamal Selim Hall"></EventsCard>
            <EventsCard i={2} progress={scrollYProgress} range={[0.33*2 , 1]} targetScale= {1-(numberOfEvents-2)*0.05} eventName="SDV" eventDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in enim sed eros sagittis ultricies non vitae enim. Morbi interdum vestibulum" image={event4} season="24/25" eventDate="3/6" eventLocation="AAST Sheraton Gamal Selim Hall"></EventsCard>
        </motion.div>
    </div>
  )
}

export default Events