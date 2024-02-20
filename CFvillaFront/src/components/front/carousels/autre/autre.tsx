import React, { useEffect, useState } from 'react'
import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import CRUD from '../../../../business/api-requests/CRUD';
import { Img, Post } from '../../../../business/types/CRUD.types';

const Autre = () => {
    const [posts, setpost] = useState<Post[]>([]);
    const navigate = useNavigate();

    const fetchPosts = async () => {
        const posts = await CRUD.getForm('posts/', { populate: ['img', 'author'] })
        console.log({posts});
        
        if (posts !== undefined && Array.isArray(posts)) {
            setpost(posts)
        }
    };
    
    const slides = posts.map((post) => (
        <Carousel.Slide key={post._id}>
            <Image src={post.img} />
        </Carousel.Slide>
    ));

    const goToArticle = (idArticle: Post['_id']) => {

        navigate(`/article-item/${idArticle}`);
    };

    useEffect(() => {
        fetchPosts()
    }, []);

    return (
        <Carousel withIndicators>{slides}</Carousel>    )
}

export default Autre






