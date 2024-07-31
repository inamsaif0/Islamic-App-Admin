import React from 'react'
import Footer from '../../layout/Footer'
import Header from '../../layout/Header'

import  Template from '../../components/invoice/template'

const InvoiceTemplate = () => {
  return (
    <div>
        <Header />
      
      <Template />

        <Footer />
    </div>
  )
}

export default InvoiceTemplate