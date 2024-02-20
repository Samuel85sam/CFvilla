import { Text, SimpleGrid, Container, rem } from '@mantine/core';
import { IconCoin, IconUsersGroup, IconHotelService, IconWifi, IconAirConditioning, IconToolsKitchen2, IconWashDry1, IconDesk, IconParking, IconSwimming, IconGrill, IconIroning2, IconBath, IconBed } from '@tabler/icons-react';
import classes from './pricing.module.css';
import React from 'react';

interface FeatureProps extends React.ComponentPropsWithoutRef<'div'> {
  icon: React.FC<any>;
  title: string;
  /* description: string | {
    icon: React.FC<any>,
    description: string
  } */
  description: string | React.JSX.Element
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
          {
            // typeof description === 'string'
            //   ? description
            //   :
            //   description.
            description
          }
        </Text>
      </div>
    </div>
  );
}

const mockdata: FeatureProps[] = [
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
    <ul>
      <li>3 < IconBed /> rooms </li>
      <li>6 <IconUsersGroup />Guests</li>
    </ul>
    
  },
  {
    icon: IconHotelService,
    title: 'What this home has to offer',
    description:
      <ul>
        <li><IconWifi />Wifi</li>
        <li>2 <IconBath /> Bathrooms</li>
        <li><IconAirConditioning /> Air-Con</li>
        <li>< IconToolsKitchen2 /> Kitchen</li>
        <li><IconWashDry1 />Laundry-waser</li>
        <li><IconIroning2 />Iron</li>
        <li><IconParking /> Parking</li>
        <li><IconSwimming /> Pool</li>
        <li>< IconDesk />Desk</li>
        <li><IconGrill />Grill</li>
      </ul>
    //'Wifi, air-Co, kitchen, laundry - washer, parking, Pool, Desk, Fire place, iron, 2 bathrooms, family friendly',

  },
];

const Description = () => {
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