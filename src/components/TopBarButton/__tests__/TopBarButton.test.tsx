import { fireEvent, render, screen } from '@testing-library/react';
import TopBarButton from '../TopBarButton';
import { Menu } from '@chakra-ui/react';
import { SearchIcon } from '@assets';

const clickHandler = jest.fn();

describe('TopBar button', () => {
  beforeEach(() => {
    clickHandler.mockReset();
  });

  it('should render for default values', () => {
    const { container } = render(
      <Menu>
        <TopBarButton
          text="abc"
          onClick={clickHandler}
          ariaLabel="abc-component"
        />
      </Menu>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should call click handler when clicked', () => {
    render(
      <Menu>
        <TopBarButton
          text="abc"
          onClick={clickHandler}
          ariaLabel="abc-component"
        />
      </Menu>,
    );

    fireEvent.click(screen.getByRole('button'));

    expect(clickHandler).toHaveBeenCalled();
  });

  it('should render with search icon', () => {
    const { container } = render(
      <Menu>
        <TopBarButton
          text="abc"
          icon={<SearchIcon />}
          onClick={clickHandler}
          ariaLabel="abc-component"
        />
      </Menu>,
    );

    expect(container).toMatchSnapshot();
  });
});
