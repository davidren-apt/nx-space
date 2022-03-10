import React from 'react';
import styled from 'styled-components';
import { BaseButton } from '@cash/base-button-library';
import { BaseInput } from '@cash/base-input';

const FormWrapper = styled.div`
  border: 1px solid grey;
  border-radius: 10px;
  width: 500px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const BaseFormRender = () => {
  return (
    <FormWrapper>
      <BaseInput />
      <BaseButton />
    </FormWrapper>
  );
};
