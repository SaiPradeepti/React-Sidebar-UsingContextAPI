import React, { useState } from 'react'
import Modal from './Modal'
import Sidebar from './Sidebar'
import Home from './Home'


function App() {
  const [showModal,setShowModal] = useState(false);
  const [showSidebar,setShowSidebar] = useState(false);
  const toggleShowModal = () => {
    setShowModal(!showModal)
  }
  const toggleShowSidebar = () => {
    setShowSidebar(!showSidebar)
  }
  return (
      <>
        <Home />
        <Modal />
        <Sidebar />
      </>
  )
}

export default App
