import { useEffect } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Form, Formik } from 'formik';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CRUD from "../../business/api-requests/CRUD";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from '../../store-zustand/authStore';
import React from 'react';
import { CreatePostPayload, Post } from '../../business/types/CRUD.types';

const defaultTheme = createTheme();

interface PostFormProps {
    post: Post | undefined
}

interface PostFormValues {
    type: Post['type']
    title: Post['title'],
    body: Post['body'],
    img?: Pick<File, 'name' | 'type' | 'size'>
}

const PostForm: React.FC<PostFormProps> = ({ post }) => {
    const currentUser = useAuthStore(state => state.currentUser)
    console.log({ currentUser });

    const jwt = useAuthStore(state => state.jwt)
    const navigate = useNavigate();
    const headers = {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${jwt}`
    };

    const sendPost = async (data: CreatePostPayload) => {
        console.log('sendPost');

        if (post === undefined) {

            const route = 'posts';
            await CRUD.postForm(route, data, headers);

            navigate('/posts');

        } else {

            const route = `posts/${post._id}`;
            await CRUD.patchFormById(route, data, headers);

            navigate('/posts');
        }
    };

    const redirect = () => {
        navigate('/posts');
    };

    useEffect(() => {
    }, []);

    return (
        <Formik<PostFormValues>
            enableReinitialize
            initialValues={{
                type: post?.type || 'newPostType',
                title: post?.title || 'newPostTitle',
                body: post?.body || 'newPostBody',
                img: undefined
            }}
            onSubmit={(values) => {

                if (currentUser === null) return
                console.log(values.img);
                //if(values.img === undefined) return

                const payload: CreatePostPayload = {
                    ...values,
                    img: values.img,
                    author: currentUser
                };

                sendPost(payload)
            }}
        >
            {(props) => (
                <Form
                    encType='multipart/form-data'
                >
                    <ThemeProvider theme={defaultTheme}>
                        <Container component="main" maxWidth="md">
                            <CssBaseline />
                            <Box
                                sx={{
                                    marginTop: 8,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                            >
                                <Typography component="h1" variant="h5">
                                    nouveau post
                                </Typography>
                                <label htmlFor="type">type</label>
                                <input
                                    id="type"
                                    name="type"
                                    type="text"
                                    onChange={props.handleChange}
                                    value={props.values.type}
                                />
                                <label htmlFor="title">titre</label>
                                <input
                                    id="title"
                                    name="title"
                                    type="text"
                                    onChange={props.handleChange}
                                    value={props.values.title}
                                />
                                <label htmlFor="body">corps du message</label>
                                {/* <input
                                    id="body"
                                    name="body"
                                    type="text"
                                    onChange={props.handleChange}
                                    value={props.values.body}
                                /> */}
                                <textarea 
                                id="body" 
                                name="body" 
                                rows={4} 
                                cols={50}
                                onChange={props.handleChange}
                                    value={props.values.body}></textarea>
                                <br/>
                                <label htmlFor="img">image</label>
                                <input
                                    id="img"
                                    name="uploaded_file"
                                    type="file"
                                    accept="image/*"
                                    onChange={
                                        (event) => {

                                            if (event.currentTarget.files) {
                                                props.setFieldValue('uploaded_file', event.currentTarget.files[0])
                                            } else {
                                                props.setFieldValue('uploaded_file', null)
                                            }
                                        }
                                    }

                                />
                                <Button
                                    type="submit"
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}

                                >
                                    UPLOAD
                                </Button>
                                <Button color='inherit'
                                    onClick={redirect}
                                    size='medium'>
                                    {'liste des contenus'}
                                </Button>
                            </Box>
                        </Container>
                    </ThemeProvider>
                </Form>)}
        </Formik >
    )
}

export default PostForm