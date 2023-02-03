import AboutImage from  '../../assets/bnw.jpg'
import {HiDownload} from 'react-icons/hi'
import CV from '../../assets/Andy Opote resume.pdf'
import Card from '../../components/Card'

import data from './data'
import Fade from 'react-reveal/Fade';
import './About.css'

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
              <p>I enjoy turning complex problems into simple and intuitive designs. Give me a description of what your business wants, and I will think of a design to solve that. I'm passionate about user
                 interaction and making client satisfaction the basis of my designs.</p>
              {/* <p>I enjoy turning complex problems into simple and intuitive designs. Give me a description of what your business wants, and I will think of a design to solve that. I'm passionate about user interaction and making my client satisfaction the basis of my designs.</p> */}
                   <a href={CV} className='btn primary'  download> Download CV <HiDownload/></a>
          </div>
      </div>
    </section>
    </Fade>
  )
}

export default About