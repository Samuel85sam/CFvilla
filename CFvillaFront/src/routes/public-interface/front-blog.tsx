import React, { useEffect, useState } from 'react';
import CRUD from '../../business/api-requests/CRUD';
import { Post } from '../../business/types/CRUD.types';
import { SimpleGrid, Card, Image, Text, Container, AspectRatio } from '@mantine/core';
import classes from '../../App.module.css';
import { useNavigate } from "react-router-dom";
import { getImageUrl } from '../../utils/images';



const FrontBlog = () => {
  const [posts, setpost] = useState<Post[]>([]);
  
  const navigate = useNavigate();

  const fetchPosts = async () => {
    const posts = await CRUD.getForm('posts/', { populate: ['img', 'author'] })
    if (posts !== undefined && Array.isArray(posts)) {
      setpost(posts)
    }
  };

  const goToArticle = (idArticle : Post['_id']) => {

    navigate(`/posts/${idArticle}/`);
  };

  useEffect(() => {
    fetchPosts()
  }, []);

  const cards = posts.map((article) => (
    <Card key={article._id} p="md" radius="md" component="a" href="#" className={classes.card}>
      <AspectRatio ratio={1920 / 1080}>
        <Image src={getImageUrl(article.img)} 
        onClick={()=>{goToArticle(article._id)}}/>
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
