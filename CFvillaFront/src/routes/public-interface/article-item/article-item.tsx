import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import CRUD from '../../../business/api-requests/CRUD';
import { Post } from '../../../business/types/CRUD.types';
import {
  Card,
  Image,
  Group,
  Text,
  Button
} from '@mantine/core';
import classes from './article-item.module.css';
import { getImageUrl } from '../../../utils/images';


const ArticleItem = () => {
  const navigate = useNavigate()
  const params = useParams();
  const idArticle = params.id;
  const [article, setArticle] = useState<Post>()

  const getPost = async () => {
    const route = `posts/${idArticle}`
    //const article = await CRUD.getForm(route)
    const article = await CRUD.getForm(route, { populate: ['img', 'author'] })
    if (article !== undefined && '_id' in article) {

      setArticle(article)
    }
  };

  useEffect(() => {
    getPost();
  }, [idArticle])

  if (!article) return <>loading...</>



  return (
    <>
      <Card withBorder padding="lg" radius="md" className={classes.card}>
        <Card.Section mb="sm">
          <Image
            src={getImageUrl(article.img)}
            alt="placeHolder"
            height={600}
          />

        </Card.Section>
        <Button
          fullWidth={false}
          onClick={() => { navigate('/') }}
        >
          retour à la liste des articles
        </Button>
        <Text fw={700} className={classes.title} mt="xs">
          {article.title}
        </Text>
        <Group mt="lg">
          <div>
            <Text fw={500}>{article.body}</Text>
            <Text fz="xs" c="dimmed">
              {article.author.firstName}
            </Text>
          </div>
        </Group>
        <Card.Section className={classes.footer}>
          <Group justify="space-between">
            <Group gap={0}>
            </Group>
          </Group>
        </Card.Section>
      </Card>
    </>
  )
}

export default ArticleItem