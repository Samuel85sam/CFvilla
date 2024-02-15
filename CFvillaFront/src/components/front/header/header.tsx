import React, { FC } from 'react'
import { Group, Burger, Grid, Button, Center } from '@mantine/core';
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
    <>
     
        <Grid gutter={{ base: 5, xs: 'md', md: 'xl', xl: 400 }}>

          <Grid.Col span={4}>
            <div></div>
          </Grid.Col>

          <Grid.Col span={4} >
            <Group gap={15} visibleFrom="xs">
              {items}
              <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
            </Group>
          </Grid.Col>

          <Grid.Col span={4}  >
            <Button >
              <a href="mailto:villakalokairi@yahoo.com">villakalokairi@yahoo.com</a>
            </Button>
          </Grid.Col >

        </Grid>
      
    </>
  );
};

export default Header