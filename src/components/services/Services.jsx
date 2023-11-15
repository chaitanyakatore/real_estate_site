import React, {useState, useEffect} from "react"
import img from "../images/services.jpg"
import Back from "../common/Back"
import "../home/featured/Featured.css"
import FeaturedCard from "../home/featured/FeaturedCard"

import LoadingBar from 'react-top-loading-bar'

const Services = () => {
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

      <section className='services mb'>
        <Back name='Services' title='Services -All Services' cover={img} />
        <div className='featured container'>
          <FeaturedCard />
        </div>
      </section>
    </>
  )
}

export default Services
