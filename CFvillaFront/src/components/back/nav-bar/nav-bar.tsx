import React from 'react'
import { Button, Group } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../../store-zustand/authStore';
import { useWindowScroll } from '@mantine/hooks';


const NavBar = () => {
  const [scroll, scrollTo] = useWindowScroll();
  const navigate = useNavigate()
  const rmvData = useAuthStore(state => state.logout)
  const logout = () => {
    rmvData()
    navigate('/')
  };

  return (
    <>
      <Group justify="center" gap="xl">
        <Button
          variant="gradient"
          gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
          onClick={() => navigate(`/posts/new`)}>
          <span>REDIGER UN ARTICLE</span>
        </Button>
        <Button
          variant="gradient"
          gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
          onClick={logout}>
          <span>QUITTER ET RETOURNER AU BLOG</span>
        </Button>
        <Button
          variant="gradient"
          gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
          onClick={() => scrollTo({ y: 0 })}>retour haut de page</Button>
      </Group>
    </>
  )
}

export default NavBar





