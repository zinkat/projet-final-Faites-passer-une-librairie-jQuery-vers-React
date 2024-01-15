export const sortedAndFilteredData = (submittedData, sortColumn, sortOrder, searchTerm) => {
    // Implémentez la logique de tri et de filtre ici et retournez les données triées et filtrées
    let dataToDisplay = [...submittedData];
  
    // Filtrer les données en fonction de la recherche
    dataToDisplay = dataToDisplay.filter((data) => {
        const firstName = data.form.firstName
        ? data.form.firstName
        : ''
      const lastName = data.form.lastName
        ? data.form.lastName
        : ''
      const birthDate = data.form.birthDate
        ? data.form.birthDate
        : ''
      const starDate = data.form.starDate
        ? data.form.starDate
        : ''
      const street = data.form.street ? data.form.street : ''
      const city = data.form.city ? data.form.city : ''
      const selectedState = data.form.selectedState
        ? data.form.selectedState
        : ''
      const zipCode = data.form.zipCode ? data.form.zipCode : ''
      const selectedDepartment = data.form.selectedDepartment
        ? data.form.selectedDepartment
        : ''
  
      return (
        firstName.includes(searchTerm)||
        lastName.includes(searchTerm) ||
        birthDate.includes(searchTerm) ||
        starDate.includes(searchTerm)||
        street.includes(searchTerm) ||
        city.includes(searchTerm) ||
        selectedState.includes(searchTerm) ||
        zipCode.includes(searchTerm) ||
        selectedDepartment.includes(searchTerm)
      );
    });
  
    // Trier les données
    if (sortColumn) {
      dataToDisplay = dataToDisplay.sort((a, b) => {
        
        const aValue = a.form[sortColumn] || '';
        const bValue = b.form[sortColumn] || '';
  
        return sortOrder === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
      });
  
      // if (sortOrder === 'desc') {
      //   dataToDisplay.reverse();
      // }
    }
  
    return dataToDisplay;
  };
  