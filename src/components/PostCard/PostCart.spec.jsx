import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { PostCard } from '.';

import { postCardPropsMock } from './mock';

describe('<PostCard />', () => {
  it('should correct component postcard', () => {
    renderTheme(<PostCard {...postCardPropsMock} />);
    expect(screen.getByAltText(/title 1/i)).toHaveAttribute(
      'src',
      'img/img.png',
    );
    expect(
      screen.getByRole('heading', { name: 'title 1' }),
    ).toBeInTheDocument();
    expect(screen.getByText('body 1')).toBeInTheDocument();
  });

  it('shuld match snapshot', () => {
    const { container } = renderTheme(<PostCard {...postCardPropsMock} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
