import { FaQuestion } from 'react-icons/fa'
import { faqs } from './faqs'
import FAQ from './FAQ'
import Fade from 'react-reveal/Fade';
import './testimonials.css'

const Testimonials = () => {
  return (
    <Fade bottom>
    <section>
        <div className="container faqs__container">
          <div className="faqs-titles">
                <h2>FAQ's</h2>
                <p>Frequently Asked Questions</p>
          </div>
            
            <div className='faqs__wrapper'>
                {
                    faqs.map(({id,question,answer})=>{
                        return <FAQ key={id} question={question} answer={answer}/>
                    })
                }
            </div>
        </div>
    </section>
    </Fade>
  )
}

export default Testimonials