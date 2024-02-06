import { useEffect, useState } from 'react';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CRUD from '../../business/api-requests/CRUD';
import {Post} from '../../business/types/CRUD.types';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';



const FrontBlog = () => {
    const [posts, setpost] = useState<  Post[] >([]);

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
             <Card sx={{ maxWidth: 1200 }}>
                <ul>
                    {posts.map((post ) => (
                        <li style={{ listStyle: 'none' }}
                            key={post._id}
                        >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={post.img && typeof post.img !== 'string' ? `${import.meta.env.VITE_STATIC_HOST}/static/${post.img.fileName}` : `${import.meta.env.VITE_STATIC_HOST}/static/No-image;jpg`}
                                    alt="post.img.fileName" />  

                                    <CardContent>                
                                        <Typography gutterBottom variant="h5" component="div">
                                            {post.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {post.body}
                                        </Typography>
                                    </CardContent>
                                
                                </CardActionArea>
                            <CardActions>
                     <Button size="small" color="primary">
                        Like
                    </Button>
                    <Button size="small" color="primary">
                        Contact
                    </Button>
                    </CardActions>
                        </li>
                    ))}
                </ul>
            </Card>
        </>
    )
};

export default FrontBlog