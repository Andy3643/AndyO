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
        <a href="https://wa.me/+254790552354" target='_blank' className='whatsaap'><RiWhatsappFill/></a>
        <a href="" target='_blank' className='mail'><AiOutlineMail/></a>
        <a href="https://twitter.com/AndyOpote?t=ZXDYqVo3rUAo-fQ06voX5w&s=09" target='_blank' className='twitter'><AiFillTwitterCircle/></a>

        </div>
        </div>
    </section>
    </Fade>
  )
}

export default FAQs