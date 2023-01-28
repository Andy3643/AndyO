
import FloatingNav from './sections/floating nav/FloatingNav'
import Footer from './sections/footer/Footer'
import Navbar from './sections/navbar/Navbar'
import Header from './sections/header/Header'
import About from './sections/about/About'
import FAQs from './sections/FAQs/FAQs'
import Portfolio from './sections/portfolio/Portfolio'
import Services from './sections/services/Services'
import Testimonials from './sections/testimonials/Testimonials'


const App = () => {
      return (
    
    <main>
      <Navbar/>
      <Header/>
     
      <About/>
      <Services/>
      <Portfolio/>
      <Testimonials/>
      <FAQs/>
      <FloatingNav/>
      <Footer/>
     

     


    </main>
  
  )
}

export default App
