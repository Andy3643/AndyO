import Card from '../../components/Card'
import data from './data'
import Fade from 'react-reveal/Fade';
import './services.css'

const Services = () => {
  return (
    <Fade bottom>
    <section id="services">
        <h2>My Services</h2>
        <p>I give you the best in all the services below</p>
        <div className="container services__container">
        {
            data.map(item => (
            <Card key={item.id} className="service light">
            <div className="service_icon">{item.icon}</div>
              <div className="service_details">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
              </div>

            </Card>
        ))
        }
        </div>
    </section>
    </Fade>
  )

}

export default Services