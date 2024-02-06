import { useEffect, useState } from 'react';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CRUD from '../../business/api-requests/CRUD';
import { Post } from '../../business/types/CRUD.types';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Container, Box, Grid } from '@mui/material';




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

    return (
        <>
            <Box sx={{ flexGrow: 1, height: '100vh', backgroundImage: `url('/static/images/background.jpg')`, backgroundSize: 'cover' }}>
                <Container sx={{ paddingTop: 4 }}>
                    <Grid container spacing={2}>
                        {posts.map((post, index) => (
                            <Grid item key={index} xs={12} sm={6} md={4}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        sx={{ height: 140 }}
                                        image={post.img && typeof post.img !== 'string' ? `${import.meta.env.VITE_STATIC_HOST}/static/${post.img.fileName}` : `${import.meta.env.VITE_STATIC_HOST}/static/No-image;jpg`}
                                        title={post.title}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {post.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {post.body}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Learn More</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>


        </>
    )
};

export default FrontBlog
//{ }