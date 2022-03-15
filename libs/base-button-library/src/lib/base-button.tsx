import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 600px;
  height: 40px;
  background-color: #cccccc;
`;

export const BaseButton = () => {
  return <Wrapper>click me, do nothing!</Wrapper>;
};
