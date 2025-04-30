import React from 'react'
import "./subHeaderStyles.css"
import { motion } from 'framer-motion'
const SubHeader = () => {




  const text = "IEEE is the world’s largest technical professional organization, committed to advancing technology in all fields of engineering. With over 3,565 student branches across colleges and universities in more than 100 countries, IEEE empowers the next generation of innovators and leaders."
  return (

    <div className='sub-header'>
      <p className='subheader-text'>
       {text.split("").map((l,i)=>{
          return <span key={`${l}-${i}`} className='typewriter-letter-container'>
            <motion.span 
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            viewport={{once:true , marginTop:"-200px"}}
            transition={{duration:0, delay:i*0.025 ,ease:"easeInOut"}}
            className='typewriter-letters'>
              {l}
            </motion.span>
            <motion.span 
            initial={{opacity:0}}
            whileInView={{opacity:[0,1,0]}}
            viewport={{once:true , marginTop:"-200px"}}
            transition={{times:[0,0.1,1], delay:i*0.025 , duration:0.125,ease:"easeInOut"}}
            className='typewriter-block'></motion.span>
          </span>
       })
       }
      </p>
    </div>
  )
}

export default SubHeader
