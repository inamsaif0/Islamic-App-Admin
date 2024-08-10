import React from 'react'
import Footer from '../../layout/Footer'
import Header from '../../layout/Header'
import PackagesTable from '../../components/tables/PackagesTable'

const Package = () => {
  return (
    <>
    <Header />
      
      <PackagesTable />

    <Footer />
    </>
  )
}

export default Package