import { Divider, Menu, MenuButton, Text } from '@chakra-ui/react';
import { MenuItemComponent, MenuListComponent } from '@components';
import { MenuTreeBranch } from '../types';
import {
  darkModeColorSelector,
  settingsStore,
  useShallow,
} from '@settingsStore';
import _ from 'lodash';

const MenuBranch = ({ title, type, items }: MenuTreeBranch) => {
  const { iconColor } = settingsStore(useShallow(darkModeColorSelector));

  return (
    <Menu>
      <MenuButton
        fontSize={'12'}
        mx={0.2}
        px={3}
        py={0.5}
        color={iconColor}
        borderRadius={4}
        fontWeight={'600'}
        _active={{
          bg: '#ffffff4f',
        }}
        aria-label={`${_.kebabCase(title.toLowerCase())}-top-bar-button`}
      >
        <Text fontWeight={type === 'main' ? 800 : 500}>{title}</Text>
      </MenuButton>
      <MenuListComponent>
        {Object.values(items).map((item, index) => {
          if (item.subSubtree === undefined) {
            return (
              <>
                <MenuItemComponent
                  key={index + '-' + item.title}
                  text={item.title}
                  ariaLabel={
                    _.kebabCase(item.title.toLowerCase()) + '-menu-button'
                  }
                  onClick={item.action}
                  command={item.command}
                  side={'left'}
                />
                {item.hasDivider ? (
                  <Divider p={0} m={0.5} color={'GrayText'} />
                ) : null}
              </>
            );
          } else {
            return (
              <Menu key={index + '-' + item.title} placement="right-start">
                <MenuButton
                  width={'100%'}
                  borderRadius={2}
                  aria-label={`${_.kebabCase(item.title.toLowerCase())}-menu-button`}
                  _hover={{ bg: 'blue.500' }}
                  _active={{ bg: 'blue.500' }}
                >
                  <MenuItemComponent
                    text={item.title}
                    ariaLabel={item.title + '-inner-menu-item'}
                    onClick={item.action}
                    command={item.command}
                    side={'left'}
                  />
                </MenuButton>
                {item.hasDivider ? <Divider p={0} m={0.5} /> : null}
                <MenuListComponent orientation="horizontal">
                  {item.subSubtree.map((subItem, subIndex) => {
                    return (
                      <>
                        <MenuItemComponent
                          key={subIndex + '-' + subItem.title + '-sub-item'}
                          text={subItem.title}
                          ariaLabel={
                            _.kebabCase(subItem.title.toLowerCase()) +
                            '-sub-menu-item'
                          }
                          onClick={subItem.action}
                          command={subItem.command}
                          side={'left'}
                        />
                        {subItem.hasDivider ? (
                          <Divider p={0} m={0.5} color={'GrayText'} />
                        ) : null}
                      </>
                    );
                  })}
                </MenuListComponent>
              </Menu>
            );
          }
        })}
      </MenuListComponent>
    </Menu>
  );
};

export default MenuBranch;
