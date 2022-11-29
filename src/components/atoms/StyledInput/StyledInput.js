import * as React from 'react';
import { FieldWrap } from './StyledInput.styles';

const StyledInput = ({ label, name }) => {
  const [value, setValue] = React.useState(null);

  const addClassOnFocus = (e) => {
    const nameAttr = e.target.getAttribute('name');
    document.querySelector(`label[for=${nameAttr}]`).classList.add('hide');
  };

  const updateValue = (e) => {
    setValue(e.target.value);
  };

  const removeClassOnBlur = () => {
    if (!value || value.length === 0) {
      document.querySelector(`.hide`).classList.remove('hide');
    }
  };

  return (
    <FieldWrap>
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        name={name}
        id={name + '-input'}
        onFocus={addClassOnFocus}
        onBlur={removeClassOnBlur}
        onChange={updateValue}
        required
      ></input>
    </FieldWrap>
  );
};

export default StyledInput;
