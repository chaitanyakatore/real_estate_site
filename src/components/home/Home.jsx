import React, { useEffect, useState } from "react"
import Awards from "./awards/Awards"
import Featured from "./featured/Featured"
import Hero from "./hero/Hero"
import Location from "./location/Location"
import Price from "./price/Price"
import Recent from "./recent/Recent"
import Team from "./team/Team"


import LoadingBar from 'react-top-loading-bar'

const Home = () => {
  const [progress, setProgress] = useState(0)
  useEffect(()=>{
    setProgress(70);
    setTimeout(()=> {
      setProgress(100);
    }, 1000 )
    
  },[])

  return (
    <>
      <LoadingBar
        color='#27ae60'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />

      
      <Hero />
      <Featured />
      <Recent />
      <Awards />
      <Location />
      <Team />
      <Price />
    </>
  )
}

export default Home
