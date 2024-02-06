import { useEffect, useState } from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CRUD from '../../business/api-requests/CRUD';

const FrontBlog = () => {
    const [posts, setpost] = useState([]);

    const fetchPosts = async () => {
        const posts = await CRUD.getForm('posts/', { populate: ['img', 'author'] })       
        setpost(posts)
    };

    useEffect(() => {
        fetchPosts()
    }, []);

    return (
        <>
            <div>
                <ul>
                    {posts.map((post ) => (
                        <li style={{ listStyle: 'none' }}
                            key={post._id}
                        >
                            <Box component="span"
                                sx={{
                                    minWidth: "600px",
                                    width: '50%',
                                    display: 'inline-block',
                                    mx: '2px',
                                    transform: 'scale(0.8)'
                                }}
                            >
                                <Card variant="outlined">
                                    <CardContent>
                                        {/* <CardMedia
                                            sx={{ height: 140 }}
                                            image="/static/images/cards/contemplative-reptile.jpg"
                                            title="green iguana"
                                        /> */}
                                        <img
                                            src={post.img ? `${import.meta.env.VITE_STATIC_HOST}/static/${post.img.fileName}` : `${import.meta.env.VITE_STATIC_HOST}/static/No-image.jpg`}
                                            alt="post.img.fileName" />
                                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                            {post.type}
                                        </Typography>
                                        <Typography variant="h5" component="div">
                                            {post.title}
                                        </Typography>
                                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                            {post.body}
                                        </Typography>
                                        <Typography variant="body2">
                                            {'post . author'}
                                            <br />
                                            {'---boutons ou options ? --- '}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Box>

                        </li>
                    ))}
                </ul>
            </div >
        </>
    )
};

export default FrontBlog