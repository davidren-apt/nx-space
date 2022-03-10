import styled from 'styled-components';

/* eslint-disable-next-line */
export interface BaseButtonLibraryProps {}

const StyledBaseButtonLibrary = styled.div`
  color: pink;
`;

export function BaseButtonLibrary(props: BaseButtonLibraryProps) {
  return (
    <StyledBaseButtonLibrary>
      <h1>Welcome to BaseButtonLibrary!</h1>
    </StyledBaseButtonLibrary>
  );
}

export default BaseButtonLibrary;
