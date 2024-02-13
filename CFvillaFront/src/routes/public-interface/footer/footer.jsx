// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Container, Group, Button } from '@mantine/core';
import { useNavigate } from 'react-router-dom'
import classes from './footer.module.css';

const Footer = () => {

  const navigate = useNavigate();

  const login = () => {
    navigate('/auth');
  };

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        VILLA-KALOKAIRI (logo)
        <Group gap={0} className={classes.links} justify="flex-end" wrap="nowrap">
          <div id='logoutButton'>
            <Button
              onClick={login}
              size='xl'
            >
              {"ADMIN → "}
            </Button>
          </div>
        </Group>
      </Container>
    </div>
  )
}

export default Footer