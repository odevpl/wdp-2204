import React from 'react';
import Button from '../../common/Button/Button';
import TelephoneInput from '../../common/TelephoneInput/TelephoneInput';
import TextInput from '../../common/TextInput/TextInput';
import ConsentInput from '../../common/ConsentInput/ConsentInput';
import styles from './Register.module.scss';

const Register = () => {
  return (
    <div className={styles.root}>
      <div className='container d-flex justify-content-center'>
        <form className={styles.form}>
          <div className='row my-4'>
            <div className='col-12 col-md-4'></div>
            <div className='col-12 col-md-8 d-flex justify-content-center'>
              <h4>Załóż konto</h4>
            </div>
          </div>

          <TextInput id='femail' type='email' label='Email' />
          <TextInput id='fre-email' type='email' label='Powtóż email' />
          <TextInput id='fpassword' type='password' label='Hasło' />
          <TextInput id='fre-password' type='password' label='Powtóż hasło' />
          <TelephoneInput id='ftelephone' label='Telefon' />
          <ConsentInput id='consent1' label='Akceptuje warunki korzystania z serwisu' />
          <ConsentInput
            id='consent2'
            label='Oświadczam, ze zapoznałem się z obowiązkiem informacyjnym dotyczącym
                przetwarzania danych osobowych'
          />

          <div className='row my-4'>
            <div className='col-12 col-md-4'></div>
            <div className='col-12 col-md-8 d-flex flex-column align-items-center'>
              <Button className='mb-4' type='submit' variant='main'>
                Załóż konto
              </Button>
              <span>Masz juz konto? Zaloguj się</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
