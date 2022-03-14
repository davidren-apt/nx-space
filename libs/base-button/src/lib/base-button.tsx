import styled from 'styled-components';

/* eslint-disable-next-line */
export interface BaseButtonProps {}

const StyledBaseButton = styled.div`
  color: pink;
`;

export function BaseButton(props: BaseButtonProps) {
  return (
    <StyledBaseButton>
      <h1>Welcome to Base Button!</h1>
    </StyledBaseButton>
  );
}

export default BaseButton;
