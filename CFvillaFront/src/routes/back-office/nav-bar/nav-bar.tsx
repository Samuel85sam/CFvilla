import React from 'react'
import { useState } from 'react';
import { Group, Code, Button} from '@mantine/core';
import classes from './nav-bar.module.css';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../../store-zustand/authStore';


const data = [
  { link: '', label: 'clients' },
  { link: '', label: 'compta' },
  { link: '', label: 'folder photo' },
  { link: '', label: 'profil settings' },
  { link: '', label: 'Sam est le meilleur dev de la terre! ' },

];


    <Button
          color='info'
         
          size='medium'
        >
          poster du contenu
        </Button>


const NavBar = () => {

const [active, setActive] = useState('Billing');
const navigate = useNavigate()
const rmvData = useAuthStore(state => state.logout)

const logout = () => {
  // localStorage.removeItem('currentUser')
  rmvData()
  navigate('/')
};

const links = data.map((item) => (
  <a
    className={classes.link}
    data-active={item.label === active || undefined}
    href={item.link}
    key={item.label}
    onClick={(event) => {
      event.preventDefault();
      setActive(item.label);
    }}
  >

    <span>{item.label}</span>
  </a>
));
return (
  <nav className={classes.navbar}>
    <div className={classes.navbarMain}>
      <Group className={classes.header} justify="space-between">
       c'est normal que là ça ne fonctionne pas ↓
      </Group>
      {links}
    </div>
    <div className={classes.footer}>
      <Button  onClick={() => navigate(`/posts/new`)}>

        <span>REDIGER UN ARTICLE</span>
      </Button>

      <Button variant="filled" color="red" onClick={logout}>

        <span>RETOUR AU SITE</span>
      </Button>
    </div>
  </nav>
)
}

export default NavBar