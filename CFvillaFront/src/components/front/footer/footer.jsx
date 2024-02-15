// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Button, Center, Grid } from '@mantine/core';
import { useNavigate } from 'react-router-dom'

const Footer = () => {

  const navigate = useNavigate();

  const login = () => {
    navigate('/auth');
  };

  return (
    <Center>
      <Grid gutter={{ base: 5, xs: 'md', md: 'xl', xl: 1000 }}>
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

  )
}

export default Footer