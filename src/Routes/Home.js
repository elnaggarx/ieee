import React from 'react'
import Hero from "../components/Hero/Hero";
import OurSponsors from "../components/OurSponsors/OurSponsors";
import Sessions from "../components/Sessions/Sessions";
import SubHeader from "../components/SubHeader/SubHeader";

const Home = () => {
  return (
    <>
      <Hero></Hero>
      <SubHeader></SubHeader>
      <OurSponsors></OurSponsors>
      <Sessions></Sessions>
      
    </>
  )
}

export default Home
