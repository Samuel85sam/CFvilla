import React from 'react';
import SignIn from '../../../components/auth/signIn';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Container
} from '@mantine/core';



const Auth = () => {

  const [isRegistered, setIsregistered] = useState(true);
  const navigate = useNavigate()
  const handleAction = function () {
    setIsregistered(!isRegistered)
  }

  return (
    <>
      <Container>
        <SignIn />
        <Button
          fullWidth
          variant="gradient"
          gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
          onClick={() => navigate('/')}
        >
          Quitter
        </Button>
      </Container>
    </>

  )
}

export default Auth