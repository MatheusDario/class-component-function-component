/* eslint-disable react/prop-types */
import * as Styled from './styled';
import { PostCard } from '../PostCard';

export const Posts = ({ posts }) => (
  <Styled.Main>
    {posts.map((post) => (
      <PostCard
        key={post.id}
        id={post.id}
        cover={post.cover}
        title={post.title}
        body={post.body}
      />
    ))}
  </Styled.Main>
);
