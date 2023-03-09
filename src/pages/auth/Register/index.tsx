import React from 'react';
import { useTranslations } from '@utils/intlTools';
import Input from '@components/Input';
import Button from '@components/Button/Button';
import './index.scss';

const Register = () => {
  const [sign_up_button] = useTranslations(['sign_up_button']);

  return (
    <div className="auth-inner">
      <div className="alerts" role="alert">
        Error message
      </div>
      <form className="auth-form">
        <div className="form-input-container">
          <Input
            id="email"
            name="email"
            type="text"
            value="my email"
            labelText="Email"
            placeholder="Enter email"
          />
          <Input
            id="username"
            name="username"
            type="text"
            value="my user name"
            labelText="Username"
            placeholder="Enter username"
          />

          <Input
            id="password"
            name="password"
            type="password"
            value="my password"
            labelText="Password"
            placeholder="Enter password"
          />
        </div>
        <Button label={sign_up_button} className="auth-button button" disabled={true} />
      </form>
    </div>
  );
};

export default Register;
