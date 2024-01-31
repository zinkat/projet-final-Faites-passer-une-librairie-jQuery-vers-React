import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  setFirstName,
  setLastName,
  setBirthDate,
  setStartDate,
  setStreet,
  setCity,
  setZipCode,
  setSelectedState,
  setSelectedDepartment,
  resetForm,
} from '../../store/formSlices'
import './MyForm.css'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Select from 'react-select-zinkat'
import { states } from '../../services/states'
import { departments } from '../../services/departments'

/**
 * Formulaire de création d'employé.
 * @param {Object} props - Propriétés du composant.
 * @param {Function} props.onSubmit - Fonction de rappel appelée lors de la soumission du formulaire.
 * @returns {JSX.Element} Composant du formulaire.
 */

function MyForm({ onSubmit }) {
  // Utilisation de Redux hooks pour accéder à dispatch et à l'état du formulaire
  const dispatch = useDispatch()
  const form = useSelector((state) => state.form)
  // Fonction de validation pour s'assurer que le nom ne contient que des lettres, espaces, tirets et accents
  const isValidName = (name) =>
    /^[A-Za-zÀ-ÖØ-öø-ÿ-]+(?: [A-Za-zÀ-ÖØ-öø-ÿ-]+)*$/.test(name)
  // Vérification si les champs obligatoires du formulaire sont remplis
  const isFormFilled = () => {
    return (
      form.form.birthDate &&
      form.form.startDate &&
      form.form.selectedState &&
      form.form.selectedDepartment &&
      form.form.selectedState.trim() !== '' &&
      form.form.selectedDepartment.trim() !== ''
    )
  }
  // Gestion de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault()
    // Conversion des champs du formulaire en minuscules
    const formDataLowerCase = {
      ...form,
      form: {
        ...form.form,
        firstName: form.form.firstName.toLowerCase(),
        lastName: form.form.lastName.toLowerCase(),
        street: form.form.street.toLowerCase(),
        city: form.form.city.toLowerCase(),
        //selectedState: form.form.selectedState.toLowerCase(),
        //selectedDepartment: form.form.selectedDepartment.toLowerCase(),
      },
    }

    // Appel de la fonction de soumission (fournie en tant que prop)
    onSubmit({})
    // Mise à jour des données locales dans le localStorage
    const listData = JSON.parse(localStorage.getItem('employeeData')) || []
    listData.push(formDataLowerCase)
    localStorage.setItem('employeeData', JSON.stringify(listData))
    // Réinitialisation du formulaire dans le store Redux
    dispatch(resetForm())
  }
  return (
    <div className="containerName">
      <form action="" id="create-employee" onSubmit={handleSubmit}>
        <label> First Name</label>
        <input
          type="text"
          id="first-name"
          autoComplete="off"
          value={form.form.firstName}
          onChange={(e) => dispatch(setFirstName(e.target.value))}
          onBlur={(e) => {
            if (!isValidName(e.target.value) && e.target.value.trim() !== '') {
              alert('The first name must contain only letters')
              dispatch(setFirstName(''))
            }
          }}
          required
        />
        <label> Last Name </label>
        <input
          type="text"
          id="last-name"
          autoComplete="off"
          value={form.form.lastName}
          onChange={(e) => dispatch(setLastName(e.target.value))}
          onBlur={(e) => {
            if (!isValidName(e.target.value) && e.target.value.trim() !== '') {
              alert('The last name must contain only letters.')

              dispatch(setLastName(''))
            }
          }}
          required
        />
        <label> Date of Birth </label>
        <DatePicker
          selected={form.form.birthDate ? new Date(form.form.birthDate) : null}
          onChange={(date) => dispatch(setBirthDate(date.toISOString()))}
          peekNextMonth
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
        />
        <label> Start Date </label>
        <DatePicker
          selected={form.form.startDate ? new Date(form.form.startDate) : null}
          onChange={(date) => dispatch(setStartDate(date.toISOString()))}
          peekNextMonth
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
        />
        <fieldset className="adress" name="adress" form="create-employee">
          <legend className="legend-adress">Address</legend>

          <section className="create-employee-input">
            <label htmlFor="street">Street</label>
            <input
              type="text"
              id="street"
              name="street"
              value={form.form.street}
              onChange={(e) => dispatch(setStreet(e.target.value))}
              autoComplete="off"
              aria-required="true"
              required
            />
            <label htmlFor="street">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={form.form.city}
              onChange={(e) => dispatch(setCity(e.target.value))}
              autoComplete="off"
              aria-required="true"
              required
            />
            <Select
              options={states}
              title="States"
              valueKey="abbreviation"
              selectedOption={form.form.selectedState}
              labelKey="name"
              onOptionSelect={(value) => dispatch(setSelectedState(value))}
            />
            <label htmlFor="zip-code">Zip Code</label>
            <input
              id="zip-code"
              value={form.form.zipCode}
              onChange={(e) => dispatch(setZipCode(e.target.value))}
              type="number"
              required
              autoComplete="off"
            />
          </section>
        </fieldset>
        <Select
          options={departments}
          title="Department"
          valueKey="service"
          labelKey="service"
          selectedOption={form.form.selectedDepartment}
          onOptionSelect={(value) => dispatch(setSelectedDepartment(value))}
          autoComplete="off"
        />
        <div className="divBtn">
          {/* Bouton de soumission */}
          <button
            type="submit"
            className={`btn ${!isFormFilled() && 'disabled'}`}
            disabled={!isFormFilled()}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  )
}

export default MyForm
