import React from 'react';
import SignIn from '../../../components/auth/signIn';
import SignUp from '../../../components/auth/signUp';
import { useState } from 'react';
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';



const Auth = () => {

  const [isRegistered, setIsregistered] =useState(true);
  const navigate= useNavigate()
  const handleAction = function () {
    setIsregistered(!isRegistered)
  }

  return (
<>
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
    <Button
    onClick={navigate('/')}>
      retour vers le site
    </Button>
</>

  )
}

export default Auth