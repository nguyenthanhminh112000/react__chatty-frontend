import React from 'react';
import './Input.scss';

type InputProps = {
  id?: string;
  name: string;
  type: string;
  labelText?: string;
  value?: string;
  className?: string;
  placeholder?: string;
  handleChange?: () => void;
};

const Input = ({
  id,
  name,
  type,
  value,
  className,
  labelText,
  placeholder,
  handleChange
}: InputProps) => {
  return (
    <div className="form-row">
      {labelText && (
        <label htmlFor={name} className="form-label">
          {labelText}
        </label>
      )}
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className={`form-input ${className}`}
        autoComplete="false"
      />
    </div>
  );
};

export default Input;
