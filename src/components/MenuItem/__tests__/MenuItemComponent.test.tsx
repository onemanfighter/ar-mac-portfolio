import { render, screen } from '@testing-library/react';
import MenuItemComponent from '../MenuItemComponent';
import { Menu } from '@chakra-ui/react';
import { SearchIcon } from '@assets';

const clickHandler = jest.fn();

describe('MenuItemComponent', () => {
  beforeEach(() => {
    clickHandler.mockReset();
  });

  it('should render for default values', () => {
    const { container } = render(
      <Menu>
        <MenuItemComponent
          text="abc"
          onClick={clickHandler}
          ariaLabel="abc-component"
        />
      </Menu>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should render with search icon', () => {
    const { container } = render(
      <Menu>
        <MenuItemComponent
          text="abc"
          icon={<SearchIcon />}
          onClick={clickHandler}
          ariaLabel="abc-component"
        />
      </Menu>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should render with command', () => {
    const { container } = render(
      <Menu>
        <MenuItemComponent
          text="abc"
          command="ctrl + shift + p"
          icon={<SearchIcon />}
          onClick={clickHandler}
          ariaLabel="abc-component"
        />
      </Menu>,
    );

    expect(container).toMatchSnapshot();
    expect(screen.getByText('ctrl + shift + p')).toBeDefined();
  });

  it('should call click handler when clicked', () => {
    render(
      <Menu>
        <MenuItemComponent
          text="abc"
          onClick={clickHandler}
          ariaLabel="abc-component"
        />
      </Menu>,
    );

    screen.getByText('abc').click();

    expect(clickHandler).toHaveBeenCalledTimes(1);
  });
});
