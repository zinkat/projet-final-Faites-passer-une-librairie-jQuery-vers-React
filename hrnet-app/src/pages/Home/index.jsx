import React from 'react'
import Form from '../../components/Form/MyForm'
import './home.css'
import { useState } from 'react'
import Modal from 'react-modal-zinkat'
import 'react-modal-zinkat/dist/index.css'

/**
 * Page principale pour créer un nouvel employé.
 * @component
 */

function Home() {
  // État local pour le contrôle du modal
  const [isModalOpen, setModalOpen] = useState(false)

  // Fonction pour ouvrir le modal
  const openModal = () => setModalOpen(true)

  // Fonction pour fermer le modal
  const closeModal = () => setModalOpen(false)

  // Fonction appelée lors de la soumission du formulaire
  const handleFormSubmit = () => {
    openModal()
  }

  return (
    <div>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <section className="container">
        <h2 className="title2">Create Employee</h2>
        <Form onSubmit={handleFormSubmit} />
      </section>
      <Modal isOpen={isModalOpen} onClose={closeModal} contentBtn="Close">
        Employee successfully created !
      </Modal>
    </div>
  )
}

export default Home
