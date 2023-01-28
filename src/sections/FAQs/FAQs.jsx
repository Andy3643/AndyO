import {RiWhatsappFill}from 'react-icons/ri'
import {AiOutlineMail}from 'react-icons/ai'
import Fade from 'react-reveal/Fade';

import {AiFillTwitterCircle}from 'react-icons/ai'

import './FAQs.css'

const FAQs = () => {
  return (
    <Fade bottom>
    <section id="faqs">
      <div className="container contacts-container">
        <h2>My Contacts</h2>
        <p>Hey there! Let me work on your project</p>
        <div className="icons">
        <a href="" className='whatsaap'><RiWhatsappFill/></a>
        <a href="" className='mail'><AiOutlineMail/></a>
        <a href="" className='twitter'><AiFillTwitterCircle/></a>

        </div>
        </div>
    </section>
    </Fade>
  )
}

export default FAQs