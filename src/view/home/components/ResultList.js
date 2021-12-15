import React from 'react';
import styled from 'styled-components';

import ResultItems from './ResultItems';

const ResultList = ({ searchResults }) => {
  const a = 1;
  return (
    <Container>
      <List id="result-list">
        {searchResults.map((item) => <ResultItems item={item} />)}
        <div id="pagination" />
      </List>
    </Container>
  );
};

const Container = styled.div`
  width: 390px;
  padding-top: 208px;
`;

const List = styled.div`
  
`;

export default ResultList;
