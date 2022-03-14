import styled from 'styled-components';

/* eslint-disable-next-line */
export interface BaseInputProps {}

const StyledBaseInput = styled.div`
  color: pink;
`;

export function BaseInput(props: BaseInputProps) {
  return (
    <StyledBaseInput>
      <h1>Welcome to Base Input!</h1>
    </StyledBaseInput>
  );
}

export default BaseInput;
