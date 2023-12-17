import P from 'prop-types';
import * as Styled from './styled';
import { PostCard } from '../PostCard';

export const Posts = ({ posts = [] }) => (
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

Posts.propTypes = {
  posts: P.arrayOf(
    P.shape({
      cover: P.string.isRequired,
      title: P.string.isRequired,
      body: P.string.isRequired,
      id: P.number,
    }),
  ),
};
