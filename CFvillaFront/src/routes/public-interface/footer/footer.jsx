import React from 'react'
import { Container, Group, ActionIcon, rem, Button} from '@mantine/core';
import {useNavigate } from 'react-router-dom'
//import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
//import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './footer.module.css';

const Footer = () => {
  
  const navigate = useNavigate();

  const login = () => {
      navigate('/auth');
  };

  return (
    <div className={classes.footer}>
    <Container className={classes.inner}>
      LOGO VILLA-KALOKAIRI
      <Group gap={0} className={classes.links} justify="flex-end" wrap="nowrap">
      <div id='logoutButton'>
                <Button 
                    onClick={login}
                   >
                    {"espace admin → "}
                </Button>
            </div>
        {/* <ActionIcon size="lg" color="gray" variant="subtle">
          <IconBrandTwitter style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
        </ActionIcon>
        <ActionIcon size="lg" color="gray" variant="subtle">
          <IconBrandYoutube style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
        </ActionIcon>
        <ActionIcon size="lg" color="gray" variant="subtle">
          <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
        </ActionIcon> */}
      </Group>
    </Container>
  </div>
  )
}

export default Footer