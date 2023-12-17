import P from 'prop-types';
import * as Styled from './styled';

export const Input = ({ onChange, value, search }) => {
  return (
    <Styled.Container>
      {!!search && <Styled.Title>Search Value: {search}</Styled.Title>}

      <Styled.Input
        placeholder="Enter a value"
        value={value}
        onChange={onChange}
        type="search"
      />
    </Styled.Container>
  );
};

Input.propTypes = {
  onChange: P.func.isRequired,
  value: P.string.isRequired,
  search: P.string.isRequired,
};
