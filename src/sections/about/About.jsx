import AboutImage from  '../../assets/logo.jpg'
import {HiDownload} from 'react-icons/hi'
// import CV from '../../assets/.pdf'
import Card from '../../components/Card'
import './About.css'
import data from './data'
import Fade from 'react-reveal/Fade';


const About = () => {
  return (
    <Fade bottom>
    <section id='about'>
      <div className='container about__container' >
          <div className="about__left">
            <div className="about__portrait">
              <img src={AboutImage} alt="opote pic" />
            </div>
          </div>
          <div className="about__right">
              <h2>About Me</h2>
              <div className="about__cards">
                {
                  data.map(item=>{
                    return <Card key={item.id} className='about__card' >
                      <span className='about__card-icon'>{item.icon}</span>
                      <h5>{item.title}</h5>
                      <small>{item.desc}</small>
                    </Card>
                     })
                }
              </div>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              <p>Lorem ipsum dolor sit amet.</p>
                   <a href='dsdffd' className='btn primary'  download> Download CV <HiDownload/></a>
          </div>
      </div>
    </section>
    </Fade>
  )
}

export default About