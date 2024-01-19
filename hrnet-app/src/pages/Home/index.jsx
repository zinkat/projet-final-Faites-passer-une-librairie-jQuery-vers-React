import React from 'react';
import Form from '../../components/Form/MyForm'
import './home.css'
// import Modal from '../../components/Modal'
 import  { useState } from 'react'
 import Modal from 'react-modal-zinkat'
import 'react-modal-zinkat/dist/index.css'


function Home() {
  const [isModalOpen, setModalOpen] = useState(false)

 const openModal = () => setModalOpen(true)
 const closeModal = () => setModalOpen(false)

  const handleFormSubmit = () => {
    openModal()
  };

  return (
    <div>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <section className="container">
        <h2 className="title2">Create Employee</h2>
        <Form onSubmit={handleFormSubmit} />
      </section>
      <Modal isOpen={isModalOpen} onClose={closeModal} contentBtn= 'Close'>
        Employee successfully created !
      </Modal>
    </div>
  )
}

export default Home
