import React from 'react';
import styled from 'styled-components';

const ResultItems = ({ item }) => {
  const a = 1;
  return (
    <Container>
      <Items>
        <h5>{item.place_name}</h5>
        {item.road_address_name ? (
          <Names>
            <span>{item.road_address_name}</span>
            <span>{item.address_name}</span>
          </Names>
        ) : (
          <span>{item.address_name}</span>
        )}
        <span>{item.phone}</span>
      </Items>
    </Container>
  );
};

const Container = styled.div`

`;

const Items = styled.div`
  padding: 18px 20px 20px;
  font-size: 17px;
  color: #000;
  h5 {
    margin-bottom: 5px;
  }
  span {
    font-size: 12px;
    color: #222;
  }
`;

const Names = styled.div`
  span {
    font-size: 12px;
    color: #222;
  }
`;

export default ResultItems;
