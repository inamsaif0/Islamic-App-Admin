import React from 'react'
import Footer from '../../layout/Footer'
import Header from '../../layout/Header'

import EmailApp from '../../components/application/email'

const EmailApplication = () => {
  return (
    <div>
        <Header />
        <EmailApp />
        <Footer />
    </div>
  )
}

export default EmailApplication