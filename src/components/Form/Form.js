import React from 'react';
import { FormWrapper } from './Form.style';
import { Field, formValueSelector, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import FormField from 'components/FormField/FormField';
import { Button, FlexHelper, Label, StyledSelectWrapper } from 'components/FormField/FormField.style';

let Form = ({ handleSubmit, typeValue, reset }) => {
  const submit = ({ name, preparation_time, type, no_of_slices, diameter, spiciness_scale, slices_of_bread }) => {
    let valuesJSON;
    if (no_of_slices) {
      valuesJSON = JSON.stringify({
        name: name,
        preparation_time: preparation_time,
        type: type,
        no_of_slices: parseInt(no_of_slices),
        diameter: parseFloat(diameter),
      });
    }
    if (spiciness_scale) {
      valuesJSON = JSON.stringify({
        name: name,
        preparation_time: preparation_time,
        type: type,
        spiciness_scale: parseInt(spiciness_scale),
      });
    }
    if (slices_of_bread) {
      valuesJSON = JSON.stringify({
        name: name,
        preparation_time: preparation_time,
        type: type,
        slices_of_bread: parseInt(slices_of_bread),
      });
    }
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: valuesJSON,
    };
    fetch('https://frosty-wood-6558.getsandbox.com:443/dishes', requestOptions)
      .then((response) => {
        if (!response.ok) {
          response.json().then((data) => alert('Error: ' + JSON.stringify(data)));
        } else return response.json();
      })
      .then((data) => console.log(data));
    reset();
  };

  return (
    <FormWrapper onSubmit={handleSubmit(submit)}>
      <Field name="name" component={FormField} type="text" labeltext="Dish name:" />
      <Field name="preparation_time" component={FormField} type="time" step="2" labeltext="Preparation time:" />
      <StyledSelectWrapper>
        <Label htmlFor="type">Type:</Label>
        <Field name="type" component="select" className="styled-select">
          <option />
          <option value="pizza">Pizza</option>
          <option value="soup">Soup</option>
          <option value="sandwich">Sandwich</option>
        </Field>
      </StyledSelectWrapper>
      {typeValue === 'pizza' && (
        <>
          <Field name="no_of_slices" component={FormField} type="number" labeltext="Pizza slices:" required />
          <Field name="diameter" component={FormField} type="number" labeltext="Diameter:" required />
        </>
      )}
      {typeValue === 'soup' && (
        <Field
          name="spiciness_scale"
          component={FormField}
          type="range"
          min="1"
          max="10"
          labeltext="Spiciness scale:"
          required
        />
      )}
      {typeValue === 'sandwich' && (
        <Field name="slices_of_bread" component={FormField} type="number" labeltext="Slices of breed:" required />
      )}
      <FlexHelper />
      <Button type="submit">Submit</Button>
    </FormWrapper>
  );
};

Form = reduxForm({
  form: 'dishes',
})(Form);

const selector = formValueSelector('dishes');
Form = connect((state) => {
  const typeValue = selector(state, 'type');

  return {
    typeValue,
  };
})(Form);

export default Form;
