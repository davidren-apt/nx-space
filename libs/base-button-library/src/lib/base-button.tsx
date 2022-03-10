import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 300px;
  height: 30px;
  background-color: #b4c3e1;
`;

export const BaseButton = () => {
  return <Wrapper>click me, do nothing</Wrapper>;
};
