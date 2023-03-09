import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useTranslations } from '@utils/intlTools';
import Input from '@components/Input';
import Button from '@components/Button/Button';
import './index.scss';

const Login = () => {
  const [forgot_password, keep_sign_in] = useTranslations(['forgot_password', 'keep_sign_in']);

  return (
    <div className="auth-inner">
      <div className="alerts" role="alert">
        Error message
      </div>
      <form className="auth-form">
        <div className="form-input-container">
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
          <label className="checkmark-container" htmlFor="checkbox">
            <Input id="checkbox" name="checkbox" type="checkbox" value={'true'} />
            {keep_sign_in}
          </label>
        </div>
        <Button label="LOGIN" className="auth-button button" disabled={true} />
        <span className="forgot-password">
          {forgot_password} <FaArrowRight className="arrow-right" />
        </span>
      </form>
    </div>
  );
};

export default Login;
