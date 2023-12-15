/* eslint-disable react/prop-types */
import * as Styled from './styled';

export const Input = ({ onChange, value, search }) => {
  return (
    <Styled.Container>
      {!!search && <Styled.Title>Search Value: {search}</Styled.Title>}

      <Styled.Input value={value} onChange={onChange} type="search" />
    </Styled.Container>
  );
};
