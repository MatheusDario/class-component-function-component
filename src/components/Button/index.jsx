/* eslint-disable react/prop-types */
import * as Styled from './styled';

export const Button = ({ text, onClick, disabled }) => {
  return (
    <Styled.Container>
      <Styled.Button disabled={disabled} onClick={onClick}>
        {text}
      </Styled.Button>
    </Styled.Container>
  );
};
