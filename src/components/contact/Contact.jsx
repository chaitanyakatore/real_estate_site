import React, {useState, useEffect} from "react"
import img from "../images/pricing.jpg"
import Back from "../common/Back"
import "./contact.css"

import LoadingBar from 'react-top-loading-bar'

const Contact = () => {
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
      
      <section className='contact mb'>
        <Back name='Contact Us' title='Get Helps & Friendly Support' cover={img} />
        <div className='container'>
          <form className='shadow'>
            <h4>Fillup The Form</h4> <br />
            <div>
              <input type='text' placeholder='Name' />
              <input type='text' placeholder='Email' />
            </div>
            <input type='text' placeholder='Subject' />
            <textarea cols='30' rows='10'></textarea>
            <button>Submit Request</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact
