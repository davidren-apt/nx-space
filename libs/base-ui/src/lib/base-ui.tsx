import styled from 'styled-components';

/* eslint-disable-next-line */
export interface BaseUiProps {}

const StyledBaseUi = styled.div`
  color: pink;
`;

export function BaseUi(props: BaseUiProps) {
  return (
    <StyledBaseUi>
      <h1>Welcome to BaseUi!</h1>
    </StyledBaseUi>
  );
}

export default BaseUi;
