import {BsWhatsapp} from 'react-icons/bs'
import { AiOutlineUser } from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {} from 'react-icons/ai'

import { AiOutlineHome } from 'react-icons/ai'
import './floatingNav.css'
const FloatingNav = () => {
  return (
    <div className='nav-floating'>
     
      <a href="#"><AiOutlineHome/></a>
      <a href="#about"><AiOutlineUser/></a>
      <a href="#portfolio"><BiBook/></a>
      <a target='_blank' href="https://wa.me/+254790552354"><button ><BsWhatsapp/></button></a>
     
      </div>
   
  )
}

export default FloatingNav