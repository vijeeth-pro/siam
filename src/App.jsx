import './style/App.css'
import Header from './section/Header'
import Footer from './section/Footer'
import WhyUs from './section/WhyUs'
import FloatingButton from './section/FloatingButton'

import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react'

function App() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <Header />
      <WhyUs/>
      <Footer />
      <FloatingButton/>
    </>
  )
}

export default App
