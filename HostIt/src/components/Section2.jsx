import React from 'react'
import './Styles/section2.css'
function Section2({data}) {

    const {id, serviceTitle, description, serviceImage} = data
  return (
    <div className='container'>
        <div className="img-container">
        <img src= {serviceImage} alt="" />
        </div>
<div className="title-container">
    <h1>{serviceTitle}</h1>
</div>

<div className="description-container">
    <p>{description}</p>
</div>

    </div>
  )
}

export default Section2