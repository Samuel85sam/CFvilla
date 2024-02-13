import React from 'react'
import { Group, Text, Button } from '@mantine/core';
import classes from './nav-bar.module.css';
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
    <nav className={classes.navbar}>
      <div className={classes.footer}>
        <Group justify="center">
          <Button onClick={() => navigate(`/posts/new`)}>
            <span>REDIGER UN ARTICLE</span>
          </Button>
          <Button variant="filled" color="lime" onClick={logout}>
            <span>QUITTER ET RETOURNER AU BLOG</span>
          </Button>
          <Button onClick={() => scrollTo({ y: 0 })}>retour haut de page</Button>
        </Group>
      </div>
    </nav>
  )
}

export default NavBar





