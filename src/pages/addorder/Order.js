import React from 'react'
import OrderTable from '../../components/tables/OrderTable'
import Footer from '../../layout/Footer'
import Header from '../../layout/Header'

const Order = () => {
  return (
    <>
    <Header />
      
      <OrderTable />

    <Footer />
    </>
  )
}

export default Order