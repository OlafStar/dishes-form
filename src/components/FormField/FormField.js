import React from 'react';
import { FormFieldWrapper, Input, Label } from './FormField.style';

const FormField = ({ name, labeltext, input, type, step, min, max }) => {
  return (
    <FormFieldWrapper>
      <Label htmlFor={name}>{labeltext}</Label>
      <Input
        {...input}
        type={type}
        step={step && type === 'time' ? step : null}
        min={min ? min : null}
        max={max ? max : null}
      />
    </FormFieldWrapper>
  );
};

export default FormField;
