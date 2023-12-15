/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    min-height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    width: 50%;
    padding: 15px;
    cursor: pointer;
    margin-bottom: 50px;
    transition: all 300ms ease-in-out;
    border-radius: 10px;
    font-size: 1.2rem;
    text-transform: uppercase;

    &:hover {
      background-color: aquamarine;
    }

    &:disabled {
      background-color: gray;
      cursor: not-allowed;
    }
  `}
`;
