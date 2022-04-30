import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({ id, label, type }) => {
  return (
    <div className='row mb-3'>
      <div className='col-12 col-sm-4'>
        <label className='form-label' htmlFor={id}>
          {label}
        </label>
      </div>
      <div className='col-12 col-sm-8'>
        <input type={type} id={id} className='form-control' />
      </div>
    </div>
  );
};

TextInput.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
};

export default TextInput;
