import { Button } from '@mantine/core';
import { useNavigate } from 'react-router-dom'

const Footer = () => {

  const navigate = useNavigate();

  const login = () => {
    navigate('/auth');
  };

  return (
    <>
    
     
          <Button
            onClick={login}
            size='l'
          >
            {"BACK-OFFICE ADMIN"}
          </Button>
       
    </>

  )
}

export default Footer