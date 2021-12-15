import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import Home from './page/Home';
import { GlobalStyle } from './style/GlobalStyle';

const App = () => {
  const a = 1;
  return (
    <Container>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Container>
  );
};

const Container = styled.div`

`;

export default App;
