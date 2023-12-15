/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const Container = styled.div`
${({ theme }) => css`
  background-color: ${theme.colors.blue};
  min-height: 100vh;
`}
`;

export const Title = styled.h2`
${({ theme }) => css`
  text-align: center;
  color: white;
  font-size: 2.5rem;
`}
`;
