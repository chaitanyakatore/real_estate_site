import React, {useState, useEffect} from "react"
import Back from "../common/Back"
import PriceCard from "../home/price/PriceCard"
import img from "../images/pricing.jpg"
import "../home/price/price.css"

import LoadingBar from 'react-top-loading-bar'


const Pricing = () => {
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
      <section className='pricing mb'>
        <Back name='30 days money back guarantee' title='No Extra Fees. Friendly Support' cover={img} />
        <div className='price container'>
          <PriceCard />
        </div>
      </section>
    </>
  )
}

export default Pricing
