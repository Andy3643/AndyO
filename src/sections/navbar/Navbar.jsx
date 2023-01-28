import Logo from '../../assets/logo.jpg'
import data from './data'
import {IoIosColorPalette} from 'react-icons/io'
import ReactSwitch from 'react-switch'
import App from '../../App'
import './navbar.css'

const Navbar = () => {
  return (
    <nav>
        <div className="container nav__container">
            <a href="index.html" className='nav__logo'> 
            <img src={Logo} alt="Andy" />
            </a>
            <ul className='nav__menu'>
                {
                    data.map(item=>{
                       return <li key={item.id}> <a href={item.link}>{item.title}</a></li>
                    })
                }
            </ul>
            <div className="switch">
           <small className='small'><i>Joshua Opote</i></small >
            </div>
            
        </div>
    </nav>
  )
}

export default Navbar