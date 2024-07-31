import React from 'react'

import GalleryMasonry from '../../components/gallery/masonry'
import Footer from '../../layout/Footer'
import Header from '../../layout/Header'

const masonry = () => {
  return (
    <div>
      <Header />
        <GalleryMasonry />
        <Footer />
    </div>
  )
}

export default masonry