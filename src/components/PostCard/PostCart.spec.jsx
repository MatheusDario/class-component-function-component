import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { PostCard } from '.';

import { props } from './mock';

describe('<PostCard />', () => {
  it('should correct component postcard', () => {
    renderTheme(<PostCard {...props} />);
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });

  it('shuld match snapshot', () => {
    const { container } = renderTheme(<PostCard {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
