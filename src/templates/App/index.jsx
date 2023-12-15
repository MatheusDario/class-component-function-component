import { Component } from 'react';
import * as Styled from './styled';
import { loadAllPosts } from '../../utils/load-posts';
import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

export class App extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 2,
    searchValue: '',
  };

  async componentDidMount() {
    const { page, postsPerPage } = this.state;

    const postsAndPhotos = await loadAllPosts();
    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos,
    });
  }

  loadMorePosts = () => {
    const { page, postsPerPage, allPosts, posts } = this.state;
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);

    this.setState({ posts, page: nextPage });
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ searchValue: value });
  };

  render() {
    const { posts, postsPerPage, page, allPosts, searchValue } = this.state;
    const noMorePosts = postsPerPage + page >= allPosts.length;
    const filtedPosts = searchValue
      ? allPosts.filter((post) => {
          return post.title.toLowerCase().includes(searchValue.toLowerCase());
        })
      : posts;
    return (
      <Styled.Container>
        <Input
          search={searchValue}
          value={searchValue}
          onChange={this.handleChange}
        />
        {filtedPosts.length > 0 ? (
          <Posts posts={filtedPosts} />
        ) : (
          <Styled.Title>Sorry :/</Styled.Title>
        )}

        {!searchValue && (
          <Button
            disabled={noMorePosts}
            onClick={this.loadMorePosts}
            text={'load more posts'}
          />
        )}
      </Styled.Container>
    );
  }
}
