import { Text, SimpleGrid, Container, rem } from '@mantine/core';
import { IconAddressBook, IconMapPinFilled, IconRoute, IconPlaneArrival, IconSpeedboat } from '@tabler/icons-react';
import classes from './contact.module.css';
import React from 'react';
import { Button } from '@mui/material';

interface ContactProps extends React.ComponentPropsWithoutRef<'div'> {
  icon: React.FC<any>;
  title: string;
  description: string | React.JSX.Element
}

function Feature({ icon: Icon, title, description, className, ...others }: ContactProps) {
  return (
    <div className={classes.feature} {...others}>
      <div className={classes.overlay} />

      <div className={classes.content}>
        <Icon style={{ width: rem(38), height: rem(38) }} className={classes.icon} stroke={1.5} />
        <Text fw={700} fz="lg" mb="xs" mt={5} className={classes.title}>
          {title}
        </Text> 
        <Text c='dark' fz="sm">
          {
            description
          }
        </Text>
      </div>
    </div>
  );
}

const mockdata: ContactProps[] = [
  {
    icon: IconAddressBook,
    title: 'Contact',
    description:
      <>
        <Button >
          <a href="mailto:villakalokairi@yahoo.com">villakalokairi@yahoo.com</a>
        </Button>
      </>
  },
  {
    icon: IconMapPinFilled,
    title: 'location',
    description:
      'Villa Kalokairi, fterno, lefkada etc...'
  },
  {
    icon: IconRoute,
    title: 'travel',
    description:
      <ul>
        <li><IconPlaneArrival />corfu : todo ... </li>
        <li> <IconPlaneArrival /> athen: todo ... </li>
        <li><IconSpeedboat /> ferry: todo ...  </li>
      </ul>

  },
];

const Contact = () => {
  const items = mockdata.map((item) => <Feature {...item} key={item.title} />);

  return (
    <Container mt={30} mb={30} size="sm">
      <SimpleGrid cols={{ base: 1, sm: 1 }} spacing={20}>
        {items}
      </SimpleGrid>
    </Container>
  );
}

export default Contact