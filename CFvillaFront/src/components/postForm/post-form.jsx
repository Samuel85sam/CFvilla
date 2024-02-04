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

const defaultTheme = createTheme();

const PostForm = (props) => {

    const [imgFile, setImgFile] = useState(null);
    console.log('imgFile ==> ', imgFile);
    const currentUser = useAuthStore((state) => state.currentUser);
    const navigate = useNavigate();
    const post = props.post

    const sendPost = async (data) => {
        if (post == undefined) {
            const route = 'posts';
            await CRUD.postForm(route, data);
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
            enableReinitialize //! sinon formik garde la première initialisation !!!

            initialValues={{
                type: post?.type || 'newPostType',
                title: post?.title || 'newPostTitle',
                author: post?.author || '',
                body: post?.body || 'newPostBody',
                img: post?.file || '',
            }}

            onSubmit={(values) => {

                const payload = {
                    ...values,
                    author: currentUser,
                    img: {
                        lastModified: imgFile.lastModified,
                        name: imgFile.name,
                        type: imgFile.type,
                        path: imgFile.webkitRelativePath,
                        size: imgFile.size
                    }
                }
                console.log('imgFile !!> ', imgFile);
                console.log('payload ==> ', payload);

                sendPost(payload)
            }}
        >
            {(props) => (
                <Form>
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
                                    name="img"
                                    type="file"
                                    accept="image/*"
                                    onChange={
                                        (e) => {
                                            const file = e.target.files[0]
                                            console.log('imgFile setState ==> ', file)
                                            setImgFile(file)
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