import styled from 'styled-components';
import NxWelcome from './nx-welcome';
import { BaseComponent } from '@cash/base-component';
import { BaseUi } from '@cash/base-ui';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <BaseComponent />
      <BaseUi />
      <NxWelcome title="ui" />
    </StyledApp>
  );
}

export default App;
