import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import CRUD from '../../business/api-requests/CRUD';
import { Post, Img} from '../../business/types/CRUD.types';
import {
  Card,
  Image,
  ActionIcon,
  Group,
  Text,
  Avatar,
  Badge,
  useMantineTheme,
  rem,
  } from '@mantine/core';
//import { IconHeart, IconBookmark, IconShare } from '@tabler/icons-react';
import classes from './article-item.module.css';
import { getImageUrl } from '../../utils/images';


const ArticleItem = () => {
  const theme = useMantineTheme();
  const params = useParams();
  const idArticle = params.id;
  const [article, setArticle] = useState<Post>()

  const getPost = async () => {
    const route = `posts/${idArticle}`
    // const article = await CRUD.getForm(route)
    const article = await CRUD.getForm(route, { populate: ['img', 'author'] })
    if (article !== undefined && '_id' in article) {
      console.log(article.img);
      
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
        alt= "placeHolder"
        height={180}
      />

      </Card.Section>

      <Badge w="fit-content" variant="light">
        decorations
      </Badge>

      <Text fw={700} className={classes.title} mt="xs">
        Top 50 underrated plants for house decoration
      </Text>

      <Group mt="lg">
        <Avatar
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png"
          radius="sm"
        />
        <div>
          <Text fw={500}>Elsa Gardenowl</Text>
          <Text fz="xs" c="dimmed">
            posted 34 minutes ago
          </Text>
        </div>
      </Group>

      <Card.Section className={classes.footer}>
        <Group justify="space-between">
          <Text fz="xs" c="dimmed">
            733 people liked this
          </Text>
          <Group gap={0}>
            {/* <ActionIcon variant="subtle" color="gray">
              <IconHeart
                style={{ width: rem(20), height: rem(20) }}
                color={theme.colors.red[6]}
                stroke={1.5}
              />
            </ActionIcon>
            <ActionIcon variant="subtle" color="gray">
              <IconBookmark
                style={{ width: rem(20), height: rem(20) }}
                color={theme.colors.yellow[6]}
                stroke={1.5}
              />
            </ActionIcon>
            <ActionIcon variant="subtle" color="gray">
              <IconShare
                style={{ width: rem(20), height: rem(20) }}
                color={theme.colors.blue[6]}
                stroke={1.5}
              />
            </ActionIcon> */}
          </Group>
        </Group>
      </Card.Section>
    </Card>
     
  </>
 )
}

export default ArticleItem