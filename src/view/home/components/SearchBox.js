import React, { useState } from 'react';
import styled from 'styled-components';
import { HiOutlineMenu } from 'react-icons/hi';
import { AiOutlineSearch } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';

import cn from 'classnames';

import { actions } from '../redux/slice';

const SearchBox = () => {
  const [value, setValue] = useState('');
  const { mapState } = useSelector((state) => state.home);
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
    <Container className={cn({ isActive: mapState })}>
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
  padding: 20px 20px 2px 20px;
  background-color: #258fff;
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
  .isActive & {
    border: 3px solid #258fff;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 14px 16px 13px;
  border-radius: 3px;
  outline: 0;
  border: 0;
  background: #fff;
  font-size: 16px;
  color: #111;
  font-weight: bold;
`;

const Button = styled.button`
  position: absolute;
  top: 7px;
  right: 5px;
  width: 36px;
  height: 36px;
  color: rgba(17, 17, 17, 0.75);
  background: none;
  outline: 0;
  border: 0;
  font-size: 25px;
`;

export default SearchBox;
