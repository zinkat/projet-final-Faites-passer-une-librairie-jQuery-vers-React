/**
 * Trie et filtre les données en fonction des paramètres spécifiés.
 *
 * @param {Array} submittedData - Données initiales à trier et filtrer.
 * @param {string} sortColumn - Colonne selon laquelle trier les données.
 * @param {string} sortOrder - Ordre de tri ('asc' ou 'desc').
 * @param {string} searchTerm - Terme de recherche pour filtrer les données.
 * @returns {Array} - Données triées et filtrées.
 */

export const sortedAndFilteredData = (
  submittedData,
  sortColumn,
  sortOrder,
  searchTerm,
) => {
  let dataToDisplay = [...submittedData]
  // Filtrer les données en fonction de la recherche
  dataToDisplay = dataToDisplay.filter((data) => {
    const firstName = data.form.firstName ? data.form.firstName : ''
    const lastName = data.form.lastName ? data.form.lastName : ''
    const birthDate = data.form.birthDate ? data.form.birthDate : ''
    const startDate = data.form.startDate ? data.form.startDate : ''
    const street = data.form.street ? data.form.street : ''
    const city = data.form.city ? data.form.city : ''
    const selectedState = data.form.selectedState ? data.form.selectedState : ''
    const zipCode = data.form.zipCode ? data.form.zipCode : ''
    const selectedDepartment = data.form.selectedDepartment
      ? data.form.selectedDepartment
      : ''
    return (
      firstName.includes(searchTerm) ||
      lastName.includes(searchTerm) ||
      birthDate.includes(searchTerm) ||
      startDate.includes(searchTerm) ||
      street.includes(searchTerm) ||
      city.includes(searchTerm) ||
      selectedState.includes(searchTerm) ||
      zipCode.includes(searchTerm) ||
      selectedDepartment.includes(searchTerm)
    )
  })
  // Trier les données
  if (sortColumn) {
    dataToDisplay = dataToDisplay.sort((a, b) => {
      const aValue = a.form[sortColumn] || ''
      const bValue = b.form[sortColumn] || ''
      return sortOrder === 'asc'
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue)
    })
  }
  return dataToDisplay
}
