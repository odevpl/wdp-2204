import React from 'react';
import PropTypes from 'prop-types';

const TelephoneInput = ({ id, label }) => {
  return (
    <div className='row mb-3'>
      <div className='col-12 col-sm-4'>
        <label className='form-label' htmlFor='ftelephone'>
          Telefon
        </label>
      </div>
      <div className='col-5 col-sm-3'>
        <select className='form-select form-control' id='ftelephone-prefix'>
          <option value='1'>+48 (PL)</option>
        </select>
      </div>
      <div className='col-7 col-sm-5'>
        <input type='tel' id='ftelephone' className='form-control' />
      </div>
    </div>
  );
};

TelephoneInput.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
};

export default TelephoneInput;
