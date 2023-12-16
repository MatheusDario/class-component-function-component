import * as Styled from './styled';
import { loadAllPosts } from '../../utils/load-posts';
import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { useCallback, useState, useEffect } from 'react';

export const App = () => {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [page, setPage] = useState(0);
  const [postsPerPage] = useState(2);

  const handleLoadPosts = useCallback(async (page, postsPerPage) => {
    const postsAndPhotos = await loadAllPosts();

    setPosts(postsAndPhotos.slice(page, postsPerPage));
    setAllPosts(postsAndPhotos);
  }, []);

  useEffect(() => {
    console.log(new Date().toLocaleString('pt-BR'));
    handleLoadPosts(0, postsPerPage);
  }, [handleLoadPosts, postsPerPage]);

  const loadMorePosts = () => {
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);

    setPosts(posts);
    setPage(nextPage);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  const noMorePosts = postsPerPage + page >= allPosts.length;
  const filtedPosts = searchValue
    ? allPosts.filter((post) => {
        return post.title.toLowerCase().includes(searchValue.toLowerCase());
      })
    : posts;

  return (
    <Styled.Container>
      <Input search={searchValue} value={searchValue} onChange={handleChange} />
      {filtedPosts.length > 0 ? (
        <Posts posts={filtedPosts} />
      ) : (
        <Styled.Title>Sorry :/</Styled.Title>
      )}

      {!searchValue && (
        <Button
          disabled={noMorePosts}
          onClick={loadMorePosts}
          text={'load more posts'}
        />
      )}
    </Styled.Container>
  );
};

/*
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
 */
