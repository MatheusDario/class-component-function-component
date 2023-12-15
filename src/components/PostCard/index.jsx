/* eslint-disable react/prop-types */
import * as Styled from './styled';

export function PostCard({ cover, title, body }) {
  return (
    <Styled.Section>
      <Styled.PostContent>
        <Styled.Image src={cover} alt={title} />
        <Styled.Title>{title}</Styled.Title>
        <Styled.Paragrath>{body}</Styled.Paragrath>
      </Styled.PostContent>
    </Styled.Section>
  );
}
