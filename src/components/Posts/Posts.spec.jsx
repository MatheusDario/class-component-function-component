import { screen } from '@testing-library/react';
import { Posts } from '.';
import { renderTheme } from '../../styles/render-theme';

const props = {
  posts: [
    {
      id: 1,
      title: 'Title 1',
      body: 'Body 1',
      cover: 'images/fundo.png',
    },
    {
      id: 2,
      title: 'Title 2',
      body: 'Body 2',
      cover: 'images/fundo.png',
    },
    {
      id: 3,
      title: 'Title 3',
      body: 'Body 3',
      cover: 'images/fundo.png',
    },
  ],
};

describe('<Posts />', () => {
  it('should render posts component', () => {
    renderTheme(<Posts {...props} />);
    expect(screen.getAllByRole('heading', { name: /title/i })).toHaveLength(3);
    expect(screen.getAllByRole('img', { name: /title/i })).toHaveLength(3);
    expect(screen.getByRole('img', { name: 'Title 3' })).toHaveAttribute(
      'src',
      'images/fundo.png',
    );
    expect(screen.getAllByText(/body/i)).toHaveLength(3);
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<Posts {...props} />);
    expect(container).toMatchSnapshot();
  });
});
