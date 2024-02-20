import { Text, SimpleGrid, Container, rem } from '@mantine/core';
import { IconTruck, IconCertificate, IconCoin, IconUsersGroup, IconHotelService } from '@tabler/icons-react';
import classes from './pricing.module.css';
import React from 'react';

interface FeatureProps extends React.ComponentPropsWithoutRef<'div'> {
  icon: React.FC<any>;
  title: string;
  description: string;
}

function Feature({ icon: Icon, title, description, className, ...others }: FeatureProps) {
  return (
    <div className={classes.feature} {...others}>
      <div className={classes.overlay} />

      <div className={classes.content}>
        <Icon style={{ width: rem(38), height: rem(38) }} className={classes.icon} stroke={1.5} />
        <Text fw={700} fz="lg" mb="xs" mt={5} className={classes.title}>
          {title}
        </Text>
        <Text c="dimmed" fz="sm">
          {description}
        </Text>
      </div>
    </div>
  );
}

const mockdata = [
  {
    icon: IconCoin,
    title: 'Price',
    description:
      '450 € /day-night.',
  },
  {
    icon: IconUsersGroup,
    title: 'Capacity',
    description:
      '3 rooms for a maximum of 6 Guests .',
  },
  {
    icon: IconHotelService,
    title: 'What this home has to offer',
    description:
      'Wifi, air-Co, kitchen, laundry - washer, parking, Pool, Desk, Fire place, iron, 2 bathrooms, family friendly',
  },
];

const Description = () =>  {
  const items = mockdata.map((item) => <Feature {...item} key={item.title} />);

  return (
    <Container mt={30} mb={30} size="sm">
      <SimpleGrid cols={{ base: 1, sm: 1 }} spacing={20}>
        {items}
      </SimpleGrid>
    </Container>
  );
}

export default Description