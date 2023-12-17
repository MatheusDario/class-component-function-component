import P from 'prop-types';
import * as Styled from './styled';

export const Button = ({ text, onClick, disabled = false }) => {
  return (
    <Styled.Container>
      <Styled.Button disabled={disabled} onClick={onClick}>
        {text}
      </Styled.Button>
    </Styled.Container>
  );
};

Button.defaultProps = {
  disabled: false,
};

Button.propTypes = {
  text: P.string.isRequired,
  onClick: P.func.isRequired,
  disabled: P.bool,
};
