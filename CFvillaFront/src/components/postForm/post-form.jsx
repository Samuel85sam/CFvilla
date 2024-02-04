import { React, useState, useEffect } from 'react'
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
import { Field } from 'formik';

const defaultTheme = createTheme();

const PostForm = (props) => {

    // const [imgFile, setImgFile] = useState(null);
    const currentUser = useAuthStore((state) => state.currentUser);
    const navigate = useNavigate();
    const post = props.post

    const sendPost = async (data) => {
        if (post == undefined) {
            const route = 'posts';
            const headers = { 'Content-Type': 'multipart/form-data' }
            await CRUD.postForm(route, data, headers);
            navigate('/');
        } else {
            const route = `posts/${post._id}`;
            await CRUD.patchFormById(route, data);
            navigate('/');
        }
    };

    const redirect = () => {
        navigate('../');
    };

    useEffect(() => {
    }, []);

    return (
        <Formik
            enableReinitialize
            initialValues={{
                type: post?.type || 'newPostType',
                title: post?.title || 'newPostTitle',
                author: post?.author || '',
                body: post?.body || 'newPostBody',
            }}

            onSubmit={(values) => {
                const payload = {
                    ...values,
                    author: currentUser,
                   // ...values.file
                    // type: values.type,
                    // title: values.title,
                    // author: currentUser,
                    // body: values.body,
                    // image: values.uploaded_file
                }
                console.log('payload ==> ', payload);

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
                                <input
                                    id="body"
                                    name="body"
                                    type="text"
                                    onChange={props.handleChange}
                                    value={props.values.body}
                                />
                                <label htmlFor="img">image</label>
                                <input
                                    id="img"
                                    name="uploaded_file"
                                    type="file"
                                    accept="image/*"
                                    onChange={
                                        (event) => {
                                            props.setFieldValue('uploaded_file', event.currentTarget.files[0])
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
                                    fullwidth={'false'}
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