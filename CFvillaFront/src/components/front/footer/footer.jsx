import React from 'react'
import { Button, Center, Grid } from '@mantine/core';
import { useNavigate } from 'react-router-dom'

const Footer = () => {

  const navigate = useNavigate();

  const login = () => {
    navigate('/auth');
  };

  return (
    <>
      background: content-box radial-gradient(crimson, skyblue);
    <Center>
      <Grid >
        <Grid.Col span={6}>
          <Button
            onClick={login}
            size='xl'
          >
            {"ADMIN → "}
          </Button>
        </Grid.Col>
        <Grid.Col span={6}>
          VILLA-KALOKAIRI (logo)
        </Grid.Col >
      </Grid >
    </Center>
    </>

  )
}

export default Footer