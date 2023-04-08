import { useState } from 'react'
import Card from '../../components/Card'
import Fade from 'react-reveal/Fade';

import projects from './data'
import './portfolio.css'
const Portfolio = () => {

  // filter items
    const [myWork,setProjects] = useState(projects);
    const filter =(category)=>{
      setProjects(projects.filter((project)=>project.category === category))
    }
    
  return (

    <section id='portfolio'>
      <div className="container portfolio__container">
          <div className='Portfolio__header'>
              <h2>My Work</h2>
              <p>I design for the user. Simple, elegant, and precise, making users return to your site.</p>
          </div>
          <div className="header__buttons">
            <button 
            className=' btn white portfolio_cta'
            onClick={()=>setProjects(projects)}>All</button>
            <button id='phonebtn-2' className=' btn white portfolio_cta' onClick={()=>filter("frontend")}>Frontend</button>
            <button className=' btn white portfolio_cta' onClick={()=>filter("backend")}>Backend</button>
            <button className=' btn white portfolio_cta' onClick={()=>filter("ux")}>UX-UI</button>

          </div>
          {/* buttons for phone */}
          <div className="header__buttons-phone">
            <button id='phonebtn-2'
            className=' portfolio_cta'
            onClick={()=>setProjects(projects)}>All</button>
            <button id='phonebtn-2' className='  portfolio_cta' onClick={()=>filter("frontend")}>Frontend</button>
            <button id='phonebtn-2' className='  portfolio_cta' onClick={()=>filter("backend")}>Backend</button>
            <button id='phonebtn-2' className='  portfolio_cta' onClick={()=>filter("ux")}>UX-UI</button>

          </div>
          <div className='display-portfolio'>
              {
                myWork.map(item =>{
                  return <Card key={item.id}>
                    <img src={item.pic} alt="" />
                    <h4 className='header-title'>{item.title}</h4>
                    <p>{item.desc}</p>
                    <div className='portfolio__card-btn'>
                      <a href={item.demo} target='_blank' className='btn primary sm'>Demo</a>
                      <a href={item.githublink} target='_blank' className='btn light sm' >Github</a>
               
                    </div>
                  </Card>
                })
              }
          </div>
      </div>
    </section>

  )
}

export default Portfolio