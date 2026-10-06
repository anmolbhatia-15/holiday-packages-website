import React from 'react'
import PACKAGES from '../../data/data'
const Footer = () => {

  return (
<>
<div className="trip-section" id='Enquire'>
    <h1>Plan your trip</h1>
    <form action="" className="trip-form">
        <input type="text" placeholder='FullName' />
        <input type="email" placeholder='Email' />
        <input type="number" placeholder='Phone' />
        <input type="date" placeholder='Date' />
       <select >
        <option value="">Select Package</option>
       {
        PACKAGES.map((item)=>(
          <option value={item.name}>{item.name}</option>
        ))
       }
       </select>
        <input type="number" placeholder='Travellers' />
    <button type="submit" onClick={"THANK YOU SO MUCH FOR BOOKING"}>Send enquiry</button>
    </form>
        
</div>

<div className="footer-bottom">

    <p>
       © 2026 WanderVista. Built as a front-end task demo for Young Edsplorer.
    </p>
</div>
</>
  )
}

export default Footer
