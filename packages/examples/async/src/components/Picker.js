import React from 'react';
import PropTypes from 'prop-types';

export default function Picker({ value, onChange, options }) {
  return (
    <span>
      <h1>{value}</h1>
      <select onChange={event => onChange(event.target.value)} value={value}>
        {options.map(option =>
          (<option value={option} key={option}>
            {option}
          </option>))
        }
      </select>
    </span>
  );
}

Picker.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
