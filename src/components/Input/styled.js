/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css``}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    width: 50%;
    margin: 3rem 0 0 3rem;
    padding: 10px;
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    color: white;
    margin: 0 0 0 3rem;
  `}
`;
