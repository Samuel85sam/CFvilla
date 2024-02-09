import React from 'react'
import { useState, useEffect } from 'react';
import { Container, Group, Burger, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './header.module.css';
import Pricing from '../../../components/header/pricing';
import Contact from '../../../components/header/contact';


const Header = () => {
  const links = [
   // { link: '/about', label: 'Features' },
   // { link: '/learn', label: 'Learn' },
   { link: 'Contact', label: 'Contact' },
   { link: '/pricing', label: 'Pricing' },
  //  { link: <Pricing/>, label: 'Pricing' },
  //  { link: <Contact/>, label: 'Contact Us' },
  ];

  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
 
    
  ));

  return (
    <header className={classes.header}>
      <Container size="lg" className={classes.inner}>
        Entre les Hommes et les Dieux
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
       
       <a href="mailto:villakalokairi@yahoo.com">villakalokairi@yahoo.com</a>
      
      </Container>
    </header>
  );
};

export default Header