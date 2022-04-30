import React from 'react';
import PropTypes from 'prop-types';

const ConsentInput = ({ id, label }) => {
  return (
    <div className='row mb-3'>
      <div className='form-check d-flex justify-content-end mb-4 col-2 col-sm-3'>
        <input className='form-check-input' type='checkbox' id={id} />
      </div>
      <div className='col-10 col-sm-9'>
        <label className='form-check-label' htmlFor={id}>
          {label}
        </label>
      </div>
    </div>
  );
};

ConsentInput.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
};

export default ConsentInput;
