import styled from 'styled-components';

export const FormWrapper = styled.form`
  width: 80%;
  height: 80%;
  text-transform: uppercase;
  color: #2e60c0;
  background: linear-gradient(105.13deg, rgba(255, 255, 255, 0.48) 0%, rgba(255, 255, 255, 0.12) 100%);
  max-width: 450px;
  display: flex;
  flex-direction: column;
  padding: 25px;
  font-size: 1.5rem;
  min-height: 475px;
  backdrop-filter: blur(100px);
  border: 2px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(105.13deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 100%);
`;
