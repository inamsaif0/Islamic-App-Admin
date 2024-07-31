import React from 'react'
import Footer from '../../layout/Footer'
import Header from '../../layout/Header'

import ChatApp from '../../components/application/chat'

const ChatApplication = () => {
  return (
    <div>
         <Header />
         <ChatApp />
         <Footer />
    </div>
  )
}

export default ChatApplication