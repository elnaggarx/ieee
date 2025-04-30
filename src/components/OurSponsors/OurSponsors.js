import React from 'react'
import "./ourSponsorsStyles.css"
import microsoft from "../../assets/microsoft.png"
import orange from "../../assets/orange.png"
import ezzSteel from "../../assets/Ezz Steel.png"
import valeo from "../../assets/valeo.png"
import vois from "../../assets/VOIS.png"
import itworx from "../../assets/ITWorx.png"

const OurSponsors = () => {
  return (
    <div className='sponsors'>
      <p>Elevating ideas with bold teams.</p>
      <p>Grateful for the support of <span>our partners.</span></p>

      <div className='logos'>
        <div className='logos-slider'>
            <img src={microsoft} alt="microsoft" className='microsoft' />
            <img src={orange} alt="orange" className='orange-sponsor' />
            <img src={ezzSteel} alt="ezz steel" className='ezz-steel'/>
            <img src={valeo} alt="valeo" className='valeo' />
            <img src={vois} alt="vois" className='vois'/>
            <img src={itworx} alt="itworx" className='itworx'/>

        </div>
        <div className='logos-slider'>
            <img src={microsoft} alt="microsoft" className='microsoft' />
            <img src={orange} alt="orange" className='orange-sponsor' />
            <img src={ezzSteel} alt="ezz steel" className='ezz-steel'/>
            <img src={valeo} alt="valeo" className='valeo' />
            <img src={vois} alt="vois" className='vois'/>
            <img src={itworx} alt="itworx" className='itworx'/>

        </div>
        <div className='logos-slider'>
            <img src={microsoft} alt="microsoft" className='microsoft' />
            <img src={orange} alt="orange" className='orange-sponsor' />
            <img src={ezzSteel} alt="ezz steel" className='ezz-steel'/>
            <img src={valeo} alt="valeo" className='valeo' />
            <img src={vois} alt="vois" className='vois'/>
            <img src={itworx} alt="itworx" className='itworx'/>

        </div>
        <div className='logos-slider'>
            <img src={microsoft} alt="microsoft" className='microsoft' />
            <img src={orange} alt="orange" className='orange-sponsor' />
            <img src={ezzSteel} alt="ezz steel" className='ezz-steel'/>
            <img src={valeo} alt="valeo" className='valeo' />
            <img src={vois} alt="vois" className='vois'/>
            <img src={itworx} alt="itworx" className='itworx'/>

        </div>
      </div>
    </div>
  )
}

export default OurSponsors
