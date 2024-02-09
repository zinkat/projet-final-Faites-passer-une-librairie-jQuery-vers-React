import React from 'react'
import Logo from '../../assets/logo.png'
import './header.css'
import { NavLink } from 'react-router-dom'
import Table from '../../assets/liste.png'
import createEmployee from '../../assets/formulaire.png'

/**
 * Composant d'en-tête affichant le logo et la barre de navigation.
 * @returns {JSX.Element} Composant d'en-tête.
 */

function Header() {
  return (
    <header>
      <section className="logoSection">
        <NavLink
          className={({ isActive }) => (isActive ? 'navlink' : 'navlink')}
          to="/"
        >
          <img className="imgLogo" src={Logo} alt="logo" />
        </NavLink>
        <p className="logoTitle">Wealth Health</p>
      </section>
      <nav className="navbar">
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : 'navlink')}
          to="/EmployeeList"
        >
          <img className="icone " src={Table} alt="View Current Employees" />
          <p>View Current Employees</p>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : 'navlink')}
          to="/"
        >
          <img
            className="icone"
            src={createEmployee}
            alt="icon create Employee page"
          />
          <p>Create Employee</p>
        </NavLink>
      </nav>
    </header>
  )
}
export default Header
