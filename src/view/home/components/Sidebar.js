import React from 'react';
import styled from 'styled-components';

import SearchBox from './SearchBox';

const Sidebar = () => {
  const a = 1;
  return (
    <Container>
      <SearchBox />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 390px;
  background-color: #fff;
  box-shadow: 0 0 8px rgba(17, 17, 17, 0.3);
  flex-shrink: 1;
`;

export default Sidebar;
