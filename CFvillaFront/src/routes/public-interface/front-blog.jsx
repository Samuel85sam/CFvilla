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
        // const posts = await CRUD.getForm('posts/', { populate: ['img', 'author'] })
        const fetchPosts = await CRUD.getForm('posts/');
        setpost(fetchPosts)
    };

    useEffect(() => {
        fetchPosts()
    }, []);

    return (
        <>
            <div>
                <ul>
                    {posts.map((post, index) => (
                        <li style={{ listStyle: 'none' }}
                            key={index}
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