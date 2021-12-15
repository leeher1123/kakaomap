import React, { useState } from 'react';
import styled from 'styled-components';
import { HiOutlineMenu } from 'react-icons/hi';
import { AiOutlineSearch } from 'react-icons/ai';
import { useDispatch } from 'react-redux';

import { actions } from '../redux/slice';

const SearchBox = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(actions.getPlace(value));
    setValue('');
  };
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <Container>
      <SearchTop>
        <span><HiOutlineMenu /></span>
        <p>
          kakao
          <b>map</b>
        </p>
      </SearchTop>
      <Form onSubmit={onSubmit}>
        <Input
          type="text"
          onChange={onChange}
          value={value}
        />
        <Button><AiOutlineSearch /></Button>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  background-color: #258fff;
  color: #fff;
  padding: 20px;
`;

const SearchTop = styled.div`
  display: flex;
  align-items: center;
  font-size: 23px;
  margin-bottom: 20px;
  p {
    margin-left: 15px;
    b {
      font-weight: bold;
    }
  }
`;

const Form = styled.form`
  position: relative;
  width: 350px;
`;

const Input = styled.input`
  width: 100%;
  padding: 14px 16px 13px;
  border-radius: 3px;
  outline: 0;
  border: 0;
  color: #767676;
  background: #fff;
`;

const Button = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 36px;
  height: 36px;
  color: rgba(118, 118, 118, 0.35);
  background: none;
  outline: 0;
  border: 0;
  font-size: 25px;
`;

export default SearchBox;
