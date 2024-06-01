import { Button, MenuButton, Text } from '@chakra-ui/react';
import { TopBarButtonProps } from './types';

const TopBarButton = ({
  text,
  icon,
  onClick,
  ariaLabel,
}: TopBarButtonProps) => {
  return (
    <MenuButton
      fontSize={'12'}
      px={2}
      py={0.5}
      color={'white'}
      borderRadius={4}
      fontWeight={'600'}
      _active={{
        bg: '#ffffff4f',
      }}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {text ? <Text>{text}</Text> : null}
      {icon}
    </MenuButton>
  );
};

export default TopBarButton;
