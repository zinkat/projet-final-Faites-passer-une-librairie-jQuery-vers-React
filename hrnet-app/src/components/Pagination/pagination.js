import React from 'react'
import { useState } from 'react'

/**
 * Composant de pagination pour naviguer entre les pages.
 * @param {Object} props - Propriétés du composant.
 * @param {number} props.itemsPerPage - Nombre d'éléments par page.
 * @param {number} props.totalItems - Nombre total d'éléments.
 * @param {Function} props.paginate - Fonction de pagination.
 * @returns {JSX.Element} Composant de pagination.
 */

export const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  // État local pour suivre la page actuelle
  const [currentPage, setCurrentPage] = useState(1)
  // Générer une liste de numéros de page en fonction du nombre total d'éléments et du nombre d'éléments par page
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i)
  }

  // Gérer le clic sur le bouton "Précédent"
  const handlePrevious = () => {
    // Met à jour la page actuelle en s'assurant qu'elle ne descend pas en dessous de 1
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
    // Appelle la fonction de pagination avec le numéro de la page précédente
    paginate(currentPage - 1)
  }

  // Gérer le clic sur le bouton "Suivant"
  const handleNext = () => {
    // Met à jour la page actuelle en s'assurant qu'elle ne dépasse pas le nombre total de pages
    setCurrentPage((prevPage) => Math.min(prevPage + 1, pageNumbers.length))
    // Appelle la fonction de pagination avec le numéro de la page suivante
    paginate(currentPage + 1)
  }

  return (
    <nav>
      <ul className="pagination">
        <li>
          <button
            className="page-btn"
            onClick={handlePrevious}
            disabled={currentPage === 1}
          >
            Previous
          </button>
        </li>
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <button
              onClick={() => {
                setCurrentPage(number)
                paginate(number)
              }}
              href="#"
              className={`page-link ${number === currentPage ? 'active-page' : ' '}`}
            >
              {number}
            </button>
          </li>
        ))}
        <li>
          <button
            className="page-btn"
            onClick={handleNext}
            disabled={currentPage === pageNumbers.length}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  )
}
