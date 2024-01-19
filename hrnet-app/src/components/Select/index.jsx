import React from 'react';
import PropTypes from 'prop-types'

const Select = ({
  options,
  title,
  valueKey,
  selectedOption,
  onOptionSelect,
  labelKey,
}) => {
  const handleSelectChange = (e) => {
    const selectedValue = e.target.value
    onOptionSelect(selectedValue)
    // console.log('Option sélectionnée :', selectedValue)
  }

  return (
    <div>
      <label>{title}</label>

      {/* Menu déroulant */}
      <select value={selectedOption} onChange={handleSelectChange}>
        <option value="">Select {title}...</option>
        {options.map((option) => (
          <option key={option[valueKey]} value={option[valueKey]}>
            {option[labelKey]}
          </option>
        ))}
      </select>
    </div>
  )
}

Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
  valueKey: PropTypes.string.isRequired,
  selectedOption: PropTypes.string,
  onOptionSelect: PropTypes.func, 
  labelKey: PropTypes.string,
}

Select.defaultProps = {
  options: [],
  title: 'Select option',
  valueKey: '',
  selectedOption: '', 
  onOptionSelect: () => {},
  labelKey: '',
}

export default Select
