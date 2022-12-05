import {
  ChakraProvider,
  Box,
  theme,
  Flex,
  Heading,
  Text,
  VStack,
  Input,
  Button,
} from '@chakra-ui/react';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginForm from './components/login/LoginForm';
import ProtectedRoute from './components/ProtectedRoute';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import BlogHome from './pages/BlogHome';

export const App = () => {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />

          <Route element={<ProtectedRoute />}>
            <Route path='/' element={<BlogHome />} />
          </Route>
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  );
};
