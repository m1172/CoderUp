import { useState } from 'react';
import { Label, Span, Wrappper } from './style';
import './formInput.css';

const FormInput = (props) => {
  const [isInputFieldEmpty, setInputFieldEmpty] = useState(true);
  const [isInputFieldFocused, setInputFieldFocused] = useState(false);
  const {
    label,
    errorMessage,
    errorMessageIfEmpty,
    onChange,
    id,
    ...inputFieldValues
  } = props;

  const handleBlur = (e) => {
    setInputFieldFocused(true);
    if (e.target.value !== '') {
      setInputFieldEmpty(false);
    } else {
      setInputFieldEmpty(true);
    }
  };

  return (
    <Wrappper>
      <Label>{label}</Label>
      <input
        {...inputFieldValues}
        onChange={onChange}
        onBlur={handleBlur}
        focused={isInputFieldFocused.toString()}
      />
      <Span>{isInputFieldEmpty ? errorMessageIfEmpty : errorMessage}</Span>
    </Wrappper>
  );
};

export default FormInput;
