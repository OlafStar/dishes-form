import { GlobalStyle } from 'assets/styles/globalStyles';
import styled from 'styled-components';
import Form from 'components/Form/Form';
import { Provider } from 'react-redux';
import { store } from 'reducers/store';

const Wrapper = styled.div`
  background: linear-gradient(
    255.71deg,
    rgba(0, 163, 255, 0.65) 0%,
    rgba(0, 255, 133, 0.537115) 49.13%,
    rgba(0, 133, 255, 0.42) 100%
  );
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = () => (
  <Provider store={store}>
    <GlobalStyle />
    <Wrapper>
      <Form />
    </Wrapper>
  </Provider>
);

export default App;
