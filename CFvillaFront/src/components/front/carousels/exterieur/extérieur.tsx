import React, { useEffect, useState } from 'react'
import CRUD from '../../../../business/api-requests/CRUD';
import { Img, Post, User } from '../../../../business/types/CRUD.types';
import { Carousel } from '@mantine/carousel';
import { getImageUrl } from '../../../../utils/images';
import classes from '../autre/autre.module.css'
import { Button, Paper, Title, Text, Container } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

const Autre = () => {
    const [posts, setpost] = useState<Post[]>([])
    const navigate = useNavigate();

    const allPosts = async () => {

        const posts = await CRUD.getForm('posts/', { populate: ['img', 'author'] })
        if (posts !== undefined && Array.isArray(posts)) {
            console.log({ posts });
            setpost(posts)
        }
    };
    const goToArticle = (idArticle: Post['_id']) => {

        navigate(`/article-item/${idArticle}`);
    };
    useEffect(() => {
        allPosts()
    }, []);

    return (
        <>
            <Container
                size={'lg'}
            >
                <Carousel
                    withIndicators
                    height={300}
                    slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
                    slideGap={{ base: 0, sm: 'md' }}
                    slidesToScroll={3}

                    align="center"
                >
                    {posts.map((post) => (
                        <Carousel.Slide

                            key={post._id}>

                            <Paper
                                className={classes.card}
                                shadow="xl"
                                p="xl "
                                radius="md"
                                style={{
                                    backgroundImage: `url(${getImageUrl(post.img)})`,
                                }}
                            >
                                <div>
                                    <Title order={3} className={classes.title}>
                                        {post.title}
                                    </Title>
                                </div>
                                <Button variant="gradient"
                                    gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
                                    onClick={() => { goToArticle(post._id) }}
                                >
                                    Read article
                                </Button>
                            </Paper>


                        </Carousel.Slide>))}
                </Carousel>
            </Container>
        </>
    )
}

export default Autre