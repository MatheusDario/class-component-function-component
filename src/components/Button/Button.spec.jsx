const { render, screen, fireEvent } = require('@testing-library/react');
const { Button } = require('.');

describe('<Button />', () => {
  it('should render with a text "load more posts"', () => {
    render(<Button text="load more posts" />);
    const button = screen.getByRole('button', { name: 'load more posts' });
    expect(button).toBeInTheDocument();
  });

  it('should call function on button click', () => {
    const fn = jest.fn();
    render(<Button onClick={fn} text="load more posts" />);
    const button = screen.getByRole('button', { name: 'load more posts' });
    //userEvent.click(button);
    fireEvent.click(button);

    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('should desabled button when disabled for true ', () => {
    render(<Button text="load more posts" disabled />);
    const button = screen.getByRole('button', { name: 'load more posts' });
    expect(button).toBeDisabled();
  });

  it('should enabled when disabled for false ', () => {
    render(<Button text="load more posts" disabled={false} />);
    const button = screen.getByRole('button', { name: 'load more posts' });
    expect(button).toBeEnabled();
  });

  it('should match snap shot ', () => {
    const fn = jest.fn();
    const { container } = render(
      <Button text="Load more" disabled={false} onClick={fn} />,
    );
    expect(container).toMatchSnapshot();
  });
});
