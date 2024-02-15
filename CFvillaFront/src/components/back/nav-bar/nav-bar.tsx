import React from 'react'
import { Button, Center } from '@mantine/core';
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
    <Center>
        <Button onClick={() => navigate(`/posts/new`)}>
          <span>REDIGER UN ARTICLE</span>
        </Button>
        <Button variant="filled" color="lime" onClick={logout}>
          <span>QUITTER ET RETOURNER AU BLOG</span>
        </Button>
        <Button onClick={() => scrollTo({ y: 0 })}>retour haut de page</Button>
    </Center>
  )
}

export default NavBar





