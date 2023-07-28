import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import Carousel from 'react-bootstrap/Carousel';
import { TESTIMONIALS } from '../testimonial'
function Section6() {
  return (
        <>  
        <Carousel>
            {TESTIMONIALS.map((testimonial) =>
            <Carousel.Item key ={testimonial.id}>
            <div className="testimonial-item">
            <p className="testimonial-comment">{testimonial.comment}</p>
            <p className="testimonial-name">{testimonial.name}</p>
            <p className="testimonial-role">{testimonial.role}</p>
          </div>
            </Carousel.Item>)}
        </Carousel>
        
        </>
 
  )
}

export default Section6