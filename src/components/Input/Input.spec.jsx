import { fireEvent, screen } from '@testing-library/react';
import { Input } from '.';
import { renderTheme } from '../../styles/render-theme';

const props = {
  value: 'What was typed',
  search: 'What was typed',
};

describe('<Input />', () => {
  it('should have a value of searchValue', () => {
    const mockFuncion = jest.fn();
    renderTheme(
      <Input
        onChange={mockFuncion}
        search={props.search}
        value={props.value}
      />,
    );
    const input = screen.getByPlaceholderText(/Enter a value/i);
    expect(input.value).toBe(props.value);
  });

  it('should call handleChange on each key pressed', () => {
    const mockFuncion = jest.fn();
    renderTheme(<Input onChange={mockFuncion} />);
    const input = screen.getByPlaceholderText(/Enter a value/i);
    const valueTyping = 'value';

    fireEvent.change(input, { target: { value: valueTyping } });

    expect(input.value).toBe(valueTyping);
  });

  it('should match a snapshot', () => {
    const mockFuncion = jest.fn();
    const { container } = renderTheme(
      <Input
        onChange={mockFuncion}
        search={props.search}
        value={props.value}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
