import React from 'react'
import { useEffect, useState } from 'react'
import arrowUp from '../../assets/up.png'
import arrowDown from '../../assets/down.png'
import './table.css'
import { sortedAndFilteredData } from '../../utils/sortedAndFiltered'
import { Pagination } from '../Pagination/pagination'
import { TableHeader } from '../HeaderTable/tableHeader'

/**
 * Composant de tableau affichant la liste des employés.
 * Gère le tri, la pagination et la recherche.
 * @returns {JSX.Element} Composant de tableau.
 */

const Table = () => {
  const [submittedData, setSubmittedData] = useState([])
  const [sortColumn, setSortColumn] = useState(null)
  const [sortOrder, setSortOrder] = useState('asc')
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)

  /**
   * Fonction de formatage de la date au format 'dd/mm/yyyy'.
   * @param {string} dateString - Chaîne de date à formater.
   * @returns {string} Date formatée.
   */
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  /**
   * Gère le tri des colonnes du tableau.
   * @param {string} columnName - Nom de la colonne à trier.
   */

  const handleSort = (columnName) => {
    // Inversez l'ordre seulement si la colonne de tri actuelle est différente de la nouvelle colonne
    const newSortOrder =
      sortColumn === columnName ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc'
    setSortOrder(newSortOrder)
    setSortColumn(columnName)
  }

  /**
   * Effet utilisé pour récupérer les données depuis localStorage au chargement du composant.
   */

  useEffect(() => {
    // Récupération des données depuis localStorage au chargement du composant
    const savedData = JSON.parse(localStorage.getItem('employeeData')) || []

    //console.log('savedData from localStorage:', savedData)

    setSubmittedData(savedData)
  }, [])

  /**
   * Fonction pour gérer le changement de page.
   * @param {number} pageNumber - Numéro de la page sélectionnée.
   */

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  /**
   * Fonction qui renvoie les données triées et filtrées pour la pagination.
   * @returns {Array} Tableau de données pour la page actuelle.
   */

  const sortedAndFiltered = () => {
    const dataAfterSortingAndFiltering = sortedAndFilteredData(
      submittedData,
      sortColumn,
      sortOrder,
      searchTerm,
    )
    const startIndex = (currentPage - 1) * itemsPerPage

    const endIndex = startIndex + itemsPerPage

    return dataAfterSortingAndFiltering.slice(startIndex, endIndex)
  }

  return (
    <div className="main">
      <div className="search">
        <input
          className="searchBar"
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <TableHeader
          itemsPerPage={itemsPerPage}
          totalItems={
            sortedAndFilteredData(
              submittedData,
              sortColumn,
              sortOrder,
              searchTerm,
            ).length
          }
          paginate={paginate}
          setItemsPerPage={setItemsPerPage}
        />
      </div>
      {submittedData.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>
                First Name
                <img
                  src={arrowUp}
                  alt="Arrow Up"
                  onClick={() => handleSort('firstName')}
                  className={`arrow ${sortColumn === 'firstName' && sortOrder === 'asc' ? 'active' : ''}`}
                />
                <img
                  src={arrowDown}
                  alt="Arrow Down"
                  onClick={() => handleSort('firstName')}
                  className={`arrow ${sortColumn === 'firstName' && sortOrder === 'desc' ? 'active' : ''}`}
                />
              </th>

              <th>
                Last Name
                <img
                  src={arrowUp}
                  alt="Arrow Up"
                  onClick={() => handleSort('lastName')}
                  className={`arrow ${sortColumn === 'lastName' && sortOrder === 'asc' ? 'active' : ''}`}
                />
                <img
                  src={arrowDown}
                  alt="Arrow Down"
                  onClick={() => handleSort('lastName')}
                  className={`arrow ${sortColumn === 'lastName' && sortOrder === 'desc' ? 'active' : ''}`}
                />
              </th>

              <th>
                Birth Date
                <img
                  src={arrowUp}
                  alt="Arrow Up"
                  onClick={() => handleSort('birthDate')}
                  className={`arrow ${sortColumn === 'birthDate' && sortOrder === 'asc' ? 'active' : ''}`}
                />
                <img
                  src={arrowDown}
                  alt="Arrow Down"
                  onClick={() => handleSort('birthDate')}
                  className={`arrow ${sortColumn === 'birthDate' && sortOrder === 'desc' ? 'active' : ''}`}
                />
              </th>
              <th>
                Start Date
                <img
                  src={arrowUp}
                  alt="Arrow Up"
                  onClick={() => handleSort('startDate')}
                  className={`arrow ${sortColumn === 'startDate' && sortOrder === 'asc' ? 'active' : ''}`}
                />
                <img
                  src={arrowDown}
                  alt="Arrow Down"
                  onClick={() => handleSort('startDate')}
                  className={`arrow ${sortColumn === 'startDate' && sortOrder === 'desc' ? 'active' : ''}`}
                />
              </th>
              <th>
                Street
                <img
                  src={arrowUp}
                  alt="Arrow Up"
                  onClick={() => handleSort('street')}
                  className={`arrow ${sortColumn === 'street' && sortOrder === 'asc' ? 'active' : ''}`}
                />
                <img
                  src={arrowDown}
                  alt="Arrow Down"
                  onClick={() => handleSort('street')}
                  className={`arrow ${sortColumn === 'street' && sortOrder === 'desc' ? 'active' : ''}`}
                />
              </th>
              <th>
                City
                <img
                  src={arrowUp}
                  alt="Arrow Up"
                  onClick={() => handleSort('city')}
                  className={`arrow ${sortColumn === 'city' && sortOrder === 'asc' ? 'active' : ''}`}
                />
                <img
                  src={arrowDown}
                  alt="Arrow Down"
                  onClick={() => handleSort('city')}
                  className={`arrow ${sortColumn === 'city' && sortOrder === 'desc' ? 'active' : ''}`}
                />
              </th>
              <th>
                State
                <img
                  src={arrowUp}
                  alt="Arrow Up"
                  onClick={() => handleSort('selectedState')}
                  className={`arrow ${sortColumn === 'selectedState' && sortOrder === 'asc' ? 'active' : ''}`}
                />
                <img
                  src={arrowDown}
                  alt="Arrow Down"
                  onClick={() => handleSort('selectedState')}
                  className={`arrow ${sortColumn === 'selectedState' && sortOrder === 'desc' ? 'active' : ''}`}
                />
              </th>
              <th>
                zip-code
                <img
                  src={arrowUp}
                  alt="Arrow Up"
                  onClick={() => handleSort('zipCode')}
                  className={`arrow ${sortColumn === 'zipCode' && sortOrder === 'asc' ? 'active' : ''}`}
                />
                <img
                  src={arrowDown}
                  alt="Arrow Down"
                  onClick={() => handleSort('zipCode')}
                  className={`arrow ${sortColumn === 'zipCode' && sortOrder === 'desc' ? 'active' : ''}`}
                />
              </th>

              <th>
                Department
                <img
                  src={arrowUp}
                  alt="Arrow Up"
                  onClick={() => handleSort('selectedDepartment')}
                  className={`arrow ${sortColumn === 'selectedDepartment' && sortOrder === 'asc' ? 'active' : ''}`}
                />
                <img
                  src={arrowDown}
                  alt="Arrow Down"
                  onClick={() => handleSort('selectedDepartment')}
                  className={`arrow ${sortColumn === 'selectedDepartment' && sortOrder === 'desc' ? 'active' : ''}`}
                />
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedAndFiltered().map((data, index) => (
              <tr key={index}>
                <td>{data.form?.firstName || ''}</td>
                <td>{data.form?.lastName || ''}</td>
                <td>
                  {data.form?.birthDate ? formatDate(data.form.birthDate) : ''}
                </td>
                <td>
                  {data.form?.startDate ? formatDate(data.form.startDate) : ''}
                </td>
                <td>{data.form?.street || ''}</td>
                <td>{data.form?.city || ''}</td>
                <td>{data.form?.selectedState || ''}</td>
                <td>{data.form?.zipCode || ''}</td>
                <td>{data.form?.selectedDepartment || ''}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h3 className="title ">No data available in table</h3>
      )}

      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={
          sortedAndFilteredData(
            submittedData,
            sortColumn,
            sortOrder,
            searchTerm,
          ).length
        }
        paginate={paginate}
      />
    </div>
  )
}

export default Table
