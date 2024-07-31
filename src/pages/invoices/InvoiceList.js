import React from 'react'
import Footer from '../../layout/Footer'
import Header from '../../layout/Header'

import List from '../../components/invoice/list'

const InvoiceList = () => {
  return (
    <div>
        <Header />
         <List />
        <Footer />
    </div>
  )
}

export default InvoiceList