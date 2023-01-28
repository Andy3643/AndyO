import Logo from '../../assets/intro.jpg'
import data from './data'
import './header.css'

const Header = () => {
  const handleClickScroll = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
    
  };

  const scrolltocontact = () => {

    const contact = document.getElementById('faqs');
    if (contact) {
      // 👇 Will scroll smoothly to the top of the next section
      contact.scrollIntoView({ behavior: 'smooth' });
    }
    
  };
  return (
 
    <header id='header'>
        <div className="container header__container">
              <div className="header__profile">
                <img src={Logo} alt="Opote potrait" />
              </div>
              <h3>Andy Opote</h3>
              <p>Hello. Thanks for visiting! I am a Web Designer passionate about his craft. I create interactive UI designs for both the front and back end.
                 I'm also a Graphic Designer. Contact me to meet your business needs</p>
              <div className="header__cta">
         
        
                <a  className='btn primary' href="#contact" onClick={scrolltocontact}>Let's Talk</a>
                <a className='btn light' href="#portfolio" onClick={handleClickScroll} >My Work</a>
               
              </div>
              <div className="header__socials">
                {
                    data.map(i=>{
                      return <a key={i.id} href={i.link} target='_blank' rel='noopener noreferrer'>{i.icon}</a>
                    })
                }
              </div>
        </div>
    </header>

  )
}

export default Header