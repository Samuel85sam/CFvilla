import React from 'react';
import SignIn from '../../components/auth/signIn';
import SignUp from '../../components/auth/signUp';
import { useState } from 'react';
import { Button } from '@mui/material'

const Auth = () => {

  const [isRegistered, setIsregistered] =useState(true);
  const handleAction = function () {
    setIsregistered(!isRegistered)
  }

  return (

    <div id= "choiceButton">
      <Button
      color = 'info'
      onClick={handleAction}
      size= 'large'
      >
        {isRegistered ? "Enregistrer un nouvel Admin" : "Déjà enregistré? → Se Connecter"}
      </Button>
      {isRegistered ? <SignIn /> : <SignUp />}
    </div>
    
  )
}

export default Auth