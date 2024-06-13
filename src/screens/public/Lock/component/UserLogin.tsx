import { ArrowRightCircleIcon } from '@assets';
import {
  Box,
  Button,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Spinner,
  Text,
  useBoolean,
} from '@chakra-ui/react';
import { processStore, loginSelector, useShallow } from '@processStore';
import { settingsStore, usersSelector } from '@settingsStore';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

const UserLoginComponent = () => {
  const { t } = useTranslation();
  const [password, setPassword] = useState<string>('');
  const { login, isUserLocked } = processStore(useShallow(loginSelector));
  const [passwordFieldVisibility, togglePasswordFieldVisibility] = useBoolean();
  const [isLoading, toggleIsLoading] = useBoolean();
  const {
    name,
    password: userPasswordData,
    profilePicture,
  } = settingsStore(useShallow(usersSelector)).userData;

  const onUserLoginHandler = useCallback(() => {
    toggleIsLoading.on();
    // Add validate logic
    !isLoading &&
      setTimeout(() => {
        if (password === userPasswordData) {
          login();
        }
        toggleIsLoading.off();
      }, 2000);
  }, [isLoading, login, password, toggleIsLoading, userPasswordData]);

  return (
    <Box
      width={'100%'}
      alignItems={'center'}
      position={'fixed'}
      bottom={'15%'}
      display={'flex'}
      flexDirection={'column'}
      zIndex={0}
      aria-label="user-login-component"
      gap={2}
    >
      <Button
        aria-label="user-button"
        padding={1}
        variant={'ghost'}
        colorScheme="gray"
        size={'48px'}
        width={'64'}
        position={'fixed'}
        bottom={'24%'}
        borderRadius={14}
        _hover={{
          transform: 'scale(1.05)',
          shadow: '1px',
          background: '#0f0f0f67',
        }}
        transition={'all 0.5s'}
        onClick={() => {
          togglePasswordFieldVisibility.toggle();
        }}
        gap={6}
      >
        <Image
          borderRadius="full"
          src={profilePicture}
          alt="Profile"
          width="48px"
          transition={'all 1s'}
        />
        <Text
          display={passwordFieldVisibility ? 'flex' : 'none'}
          color={'white'}
          fontSize={14}
          fontWeight={600}
          transition={'all 1s'}
        >
          {name}
        </Text>
      </Button>

      <InputGroup
        display={passwordFieldVisibility ? 'flex' : 'none'}
        transition={'all 0.5s'}
        width={'48'}
        height={'10'}
        gap={1}
      >
        <Input
          aria-label="password-text-input"
          placeholder={t('LockScreen.inputPlaceholder')}
          variant={'solid'}
          type="password"
          fontSize={14}
          height={'26px'}
          borderRadius={'20'}
          value={password}
          margin={0}
          alignSelf={'center'}
          width={'sm'}
          onChange={(text) => setPassword(text.target.value)}
          onKeyPress={(key) => {
            if (key.key === 'Enter') onUserLoginHandler();
          }}
          maxLength={20}
          bgColor={'#0000007f'}
          color={'#fff'}
        />
        <InputRightElement marginRight={1}>
          {isLoading ? (
            <Spinner size={'sm'} aria-label="spinner" />
          ) : (
            <IconButton
              height={'5'}
              variant={'ghost'}
              onClick={onUserLoginHandler}
              icon={<ArrowRightCircleIcon />}
              borderRadius={'full'}
              aria-label="login-button"
            />
          )}
        </InputRightElement>
      </InputGroup>
      <Text
        opacity={passwordFieldVisibility ? 1 : 0}
        align={'center'}
        fontSize={12}
        color={'white'}
        transition={'all 1s'}
      >
        {t(
          isUserLocked
            ? 'LockScreen.loginPasswordText2'
            : 'LockScreen.loginPasswordText',
        )}
      </Text>
    </Box>
  );
};

export default UserLoginComponent;
