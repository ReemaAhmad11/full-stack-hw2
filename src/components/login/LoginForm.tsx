import { VStack, Input, Button, Text, Box } from '@chakra-ui/react';

import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ILoginForm {
  username: string;
  password: string;
  submitLogin: () => Promise<void>;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}

const LoginForm = ({
  username,
  password,
  submitLogin,
  setUsername,
  setPassword,
}: ILoginForm) => {
  return (
    <VStack align='left' spacing='1rem' width='100%'>
      <Box>
        <Text color={'darkslategray'}>Username</Text>
        <Input
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          type='text'
        />
      </Box>
      <Box>
        <Text color={'darkslategray'} >Password</Text>
        <Input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type='password'
        />
      </Box>
      <Button color={'darkslategray'} bg={'darkseagreen'} onClick={submitLogin}>Login !</Button>
    </VStack>
  );
};

export default LoginForm;
