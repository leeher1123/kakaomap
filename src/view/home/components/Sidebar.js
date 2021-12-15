import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

import SearchBox from './SearchBox';
import ResultList from './ResultList';

const Sidebar = () => {
  const { searchResults } = useSelector((state) => state.home);
  const menu = ['검색', '길찾기', '버스', '지하철', 'MY'];
  const categoryPlace = useSelector((state) => state.home.place);
  return (
    <>
      <Container>
        <SearchBox />
        <MenuList>
          {
            menu.map((item) => (
              <MenuItems to="/">
                {item}
              </MenuItems>
            ))
          }
        </MenuList>
        {
          categoryPlace && (
            <SearchResult>
              장소명
              &nbsp;
              <p className="color">{categoryPlace}</p>
              &nbsp;
              검색결과
            </SearchResult>
          )
        }
      </Container>
      <ResultList searchResults={searchResults} />
    </>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  color: #fff;
  width: 390px;
  height: 100%;
  overflow-y: scroll;
`;

const MenuList = styled.div`
  background-color: #258fff;
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 15px;
  padding: 0 11px;
  height: 54px;
`;

const MenuItems = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 74px;
  padding: 12px 9px;
  color: #fff;
  a {
    padding: 6px 0 5px;
  }
`;

const SearchResult = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  color: #444;
  font-size: 14px;
  font-weight: 400;
  padding: 15px 10px;
  border-bottom: 1px solid rgba(51, 51, 51, 0.18);
  margin-bottom: 10px;
  p {
    &.color {
      color: #1f8cff;
    }
  }
`;

export default Sidebar;
