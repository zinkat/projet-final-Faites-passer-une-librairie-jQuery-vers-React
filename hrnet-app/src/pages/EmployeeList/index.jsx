import React from 'react';
import Table from '../../components/Table'
import './employee.css'

function EmployeeList() {
  return (
    <div className='containerTable'>
      <div className="title">
        <h1>Current Employees </h1>
      </div>
      <div>
        <Table />
      </div>
    </div>
  )
}
export default EmployeeList
