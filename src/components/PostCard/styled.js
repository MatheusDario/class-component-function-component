/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const Section = styled.section`
${({ theme }) => css`
  background-color: ${theme.colors.lightGray};
  box-shadow: 0px 0px 10px rgba(255, 255, 255, .4 );
  border-radius: 10px;
  margin: 1rem 0;
  transition: all 300ms ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
  max-width: 50vh;
`}
`;

export const PostContent = styled.div`
${({ theme }) => css`
  padding: 1.5rem;
`}
`;

export const Title = styled.h1`
${({ theme }) => css`
  font-size: 2.3rem;
`}
`;

export const Paragrath = styled.p`
${({ theme }) => css`
  text-align: justify;
  font-size: 1.3rem;
`}
`;

export const Image = styled.img`
${({ theme }) => css`
  width: 100%;
`}
`;
