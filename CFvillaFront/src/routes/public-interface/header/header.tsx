import React, { FC } from 'react'
import { useState, useEffect } from 'react';
import { Container, Group, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './header.module.css';

export interface Link {
  link: string,
  label: string
}
interface HeaderProps {
  links: Link[],
  state: Link
  setState(link: Link): void
}

const Header: FC<HeaderProps> = (props) => {
  
  const links = props.links
  


    
  const [opened, { toggle }] = useDisclosure(false);
  
  const items = links.map((link) => (
    <a
    key={link.label}
    href={link.link}
    className={classes.link}
    data-active={link === props.state || undefined}
    onClick={(event) => {
      event.preventDefault();
      props.setState(link);
    }}
    >
      
      {link.label}
      
    </a>

  ));

  return (
    <header className={classes.header}>
      <Container size="lg" className={classes.inner}>
        Villa Kalokairi
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