import styled from 'styled-components';

/* eslint-disable-next-line */
export interface BaseFormProps {}

const StyledBaseForm = styled.div`
  color: pink;
`;

export function BaseForm(props: BaseFormProps) {
  return (
    <StyledBaseForm>
      <h1>Welcome to Base Form!</h1>
    </StyledBaseForm>
  );
}

export default BaseForm;
