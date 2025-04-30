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
            <EventsCard i={0} progress={scrollYProgress} range={[0.333*0 , 1]} targetScale= {1-(numberOfEvents-0)*0.05} eventName="Ventus" eventDesc="Participants had the opportunity to engage in a hands-on demo session of the GWO BTT Electrical module, fully experienced through virtual reality at the AAST Engineering Building.

Hosted by Ventus Academy, the session brought global-standard wind energy training to Egypt and the MENA region, offering a cutting-edge introduction to the world of renewable energy and electrical systems." image={event1} season="24/25" eventDate="29/2" eventLocation="AAST Sheraton Gamal Selim Hall"></EventsCard>
            <EventsCard i={1} progress={scrollYProgress} range={[0.33*1 , 1]} targetScale= {1-(numberOfEvents-1)*0.05} eventName="High Voltage" eventDesc="Dive into the core concepts of electrical networks, substation equipment, single-line diagrams (SLDs), and the various types of high-voltage substations. Enhance your understanding and uncover the critical infrastructure that powers modern energy systems!" image={event2}  season="24/25" eventDate="1/5" eventLocation="AAST Sheraton Gamal Selim Hall"></EventsCard>
            <EventsCard i={2} progress={scrollYProgress} range={[0.33*2 , 1]} targetScale= {1-(numberOfEvents-2)*0.05} eventName="SDV" eventDesc="This session explored the revolutionary concept of Software-Defined Vehicles, where software plays a central role in controlling and enhancing vehicle functions. Attendees learned how SDVs are reshaping the automotive industry, from driving performance to in-car features, and the role of software in creating smarter, more connected vehicles." image={event4} season="24/25" eventDate="3/6" eventLocation="AAST Sheraton Gamal Selim Hall"></EventsCard>
        </motion.div>
    </div>
  )
}

export default Events