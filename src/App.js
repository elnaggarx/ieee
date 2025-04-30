import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Routes } from "react-router";
import { Route } from "react-router";
import Home from "./Routes/Home";
import About from "./Routes/About";
import Events from "./Routes/Events";
import { useState , useEffect } from "react";
import { motion , AnimatePresence } from "framer-motion";
import logo from "./assets/IEEE AAST white.png"
function App() {
  const [showLoadingScreen,setShowLoadingScreen] = useState(true)
  useEffect(()=>{
    const timer = setTimeout(() => {
      setShowLoadingScreen(false)
    }, 5000);
    
    return ()=> clearTimeout(timer)
  },[])
  return (
    <>
    {
      !showLoadingScreen && <motion.div className="App">
        <Header></Header>
        <Routes>

          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/events" element={<Events></Events>}></Route>
        </Routes>
        <Footer></Footer>
      </motion.div>
    }
    <AnimatePresence>
    {
        showLoadingScreen &&  
          <motion.div initial={{opacity:0}} animate={{opacity:1} } exit={{opacity:0 , transition:{duration:0.5}}} transition={{delay:1,duration:0.5}} className="loading-screen                              ">
          <motion.div className="loading-screen-image-container"><img src={logo} alt="IEEE AAST" /></motion.div>
        </motion.div>
        
      }</AnimatePresence>
    </>
  );
}

export default App;
