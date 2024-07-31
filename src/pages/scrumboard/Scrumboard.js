import React from 'react'

import Scrum from '../../components/scrumboard/scrum'
import Footer from '../../layout/Footer'
import Header from '../../layout/Header'

const Scrumboard = () => {
  return (
    <div>
          <Header />
         <Scrum />
          <Footer />
    </div>
  )
}

export default Scrumboard