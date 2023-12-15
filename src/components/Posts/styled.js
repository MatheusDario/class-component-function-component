/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const Main = styled.main`
  ${({ theme }) => css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
  `}
`;
