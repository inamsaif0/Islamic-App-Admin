import React from 'react'
import Summary from '../../components/invoice/summary'
import Footer from '../../layout/Footer'
import Header from '../../layout/Header'

const InvoiceSummary = () => {
    return (
        <div>
            <Header />
            <Summary />
            <Footer />
        </div>
    )
}

export default InvoiceSummary