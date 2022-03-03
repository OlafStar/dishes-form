import styled from 'styled-components';

export const FormFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0 10px 0;
`;

export const Label = styled.label`
  letter-spacing: 2px;
  font-weight: bold;
`;

export const Input = styled.input`
  color: #4f7eb5;
  outline: none;
  text-align: center;
  box-shadow: 9px 9px 10px rgba(0, 0, 0, 0.1);
  border: none;
  height: 30px;
  &[type='range'] {
    box-shadow: none;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  border: none;
  background: linear-gradient(105.13deg, rgba(255, 255, 255, 0.48) 0%, rgba(255, 255, 255, 0.12) 100%);
  margin-bottom: auto;
  padding: 10px 15px;
  font-size: 1.5rem;
  font-weight: bold;
  color: #4f7eb5;
  text-transform: uppercase;
  border: 3px solid;
  border-image-source: linear-gradient(105.13deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 100%);
  border-image-slice: 1;
`;

export const StyledSelectWrapper = styled.div`
  margin: 10px 0 10px 0;
  display: flex;
  align-items: center;
  .styled-select {
    border: none;
    height: 30px;
    outline: none;
    flex-grow: 1;
    background: none;
    border-top: 2px solid;
    border-bottom: 2px solid;
    border-image-source: linear-gradient(105.13deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 100%);
    border-image-slice: 1;
    color: #4f7eb5;
    letter-spacing: 1px;
  }
`;

export const Select = styled.select`
  box-shadow: 9px 9px 10px rgba(0, 0, 0, 0.1);
  border: none;
  height: 30px;
`;

export const FlexHelper = styled.span`
  display: block;
  flex-grow: 1;
`;
