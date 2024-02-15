import { useEffect } from 'react'
import { createTheme } from '@mui/material/styles';
import CRUD from "../../../business/api-requests/CRUD";
import { CreatePostPayload, Post, User } from '../../../business/types/CRUD.types';
import React from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../../store-zustand/authStore";
import {
    TextInput,
    Paper,
    Title,
    Container,
    Button,
    Textarea,
} from '@mantine/core';
const defaultTheme = createTheme();

interface PostFormProps {
    post: Post | undefined
}

interface PostFormValues {
    type: Post['type']
    title: Post['title'],
    body: Post['body'],
    img?: Pick<File, 'name' | 'type' | 'size'>,
    author: User['_id']
}

const PostForm: React.FC<PostFormProps> = ({ post }) => {
    const currentUser = useAuthStore(state => state.currentUser)
    const jwt = useAuthStore(state => state.jwt)
    const navigate = useNavigate();
    const headers = {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${jwt}`
    };
    const SignupSchema = Yup.object().shape({
        type: Yup.string().required(),
        title: Yup.string().required(),
        body: Yup.string().required(),
        img: Yup.mixed()
    });

    const formik = useFormik({

        initialValues: {
            type: post?.type || 'newPostType',
            title: post?.title || 'newPostTitle',
            body: post?.body || 'newPostBody',
            img: undefined,
            author: post?.author._id || currentUser!  
        },

        validationSchema: SignupSchema,

        onSubmit: async (values) => {

            sendPost(values)
        }
    })

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
        <Container size={420} my={40}>
            <form
                encType='multipart/form-data'
                onSubmit={formik.handleSubmit}
            >
                <Title ta="center" >
                    Nouvel Article:
                </Title>
                <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                    <TextInput label="Zone" placeholder="Zone de la Villa" required
                        id="type"
                        name="type"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.type}
                    />
                    <label htmlFor="title">titre</label>
                    <TextInput
                        id="title"
                        name="title"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.title}
                    />
                    <label htmlFor="body">corps du message</label>
                    <Textarea
                        id="body"
                        name="body"
                        rows={4}
                        cols={50}
                        onChange={formik.handleChange}
                        value={formik.values.body}></Textarea>
                    <br />
                    <label htmlFor="img">image</label>
                    <TextInput
                        id="img"
                        name="uploaded_file"
                        type="file"
                        accept="image/*"
                        onChange={
                            (event) => {

                                if (event.currentTarget.files) {
                                    formik.setFieldValue('uploaded_file', event.currentTarget.files[0])
                                } else {
                                    formik.setFieldValue('uploaded_file', null)
                                }
                            }
                        }

                    />
                    <Button
                        type="submit"
                        variant="contained"
                        // sx={{ mt: 3, mb: 2 }}

                    >
                        UPLOAD
                    </Button>
                    <Button color='inherit'
                        onClick={redirect}
                        size='medium'>
                        {'liste des contenus'}
                    </Button>
                </Paper>

            </form>

        </Container>

    )
}

export default PostForm