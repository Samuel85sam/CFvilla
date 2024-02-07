import { useEffect, useState } from 'react';
import * as React from 'react';
import CRUD from '../../business/api-requests/CRUD';
import { Post } from '../../business/types/CRUD.types';
import { SimpleGrid, Card, Image, Text, Container, AspectRatio } from '@mantine/core';
import classes from '../../App.css';


/// <reference types="vite/client" />






const FrontBlog = () => {
  const [posts, setpost] = useState<Post[]>([]);

  const fetchPosts = async () => {
    const posts = await CRUD.getForm('posts/', { populate: ['img', 'author'] })
    if (posts !== undefined && Array.isArray(posts)) {
      setpost(posts)
    }
  };

  useEffect(() => {
    fetchPosts()
  }, []);

  const cards = posts.map((article) => (
    <Card key={article.title} p="md" radius="md" component="a" href="#" className={classes.card}>
      <AspectRatio ratio={1920 / 1080}>
        <Image src={article.img} />
      </AspectRatio>
      {/* <Text c="dimmed" size="xs" tt="uppercase" fw={700} mt="md">
        {article.date}
      </Text> */}
      <Text className={classes.title} mt={5}>
        {article.title}
      </Text>
    </Card>
  ));
  return (
    <>
      <Container py="xl">
      <SimpleGrid cols={{ base: 1, sm: 2 }}>{cards}</SimpleGrid>
    </Container>
    </>
  )
};

export default FrontBlog
