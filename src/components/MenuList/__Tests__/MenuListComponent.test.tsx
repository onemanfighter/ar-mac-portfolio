import { render, screen } from '@testing-library/react';
import { Menu } from '@chakra-ui/react';
import { SearchIcon } from '@assets';
import MenuListComponent from '../MenuListComponent';

describe('MenuList component', () => {
  it('should render for default values', () => {
    const { container } = render(
      <Menu>
        <MenuListComponent>
          <div>abc</div>
        </MenuListComponent>
      </Menu>,
    );

    expect(container).toMatchSnapshot();
  });
});
