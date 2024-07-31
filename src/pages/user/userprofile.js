import React from 'react'

import UserProfile from '../../components/user/userprofile'
import Footer from '../../layout/Footer'
import Header from '../../layout/Header'
const userprofile = () => {
  return (
    <div>
           <Header />
        <UserProfile />

        <Footer />

    </div>
  )
}

export default userprofile