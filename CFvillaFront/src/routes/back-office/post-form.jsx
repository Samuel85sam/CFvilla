import React, { useCallback } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Form, Field, Formik } from 'formik';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CRUD from "../../business/api-requests/CRUD";
import { useNavigate } from "react-router-dom";

const defaultTheme = createTheme();

const PostForm = () => {

  const navigate = useNavigate();

  const sendPost = async (data) => {
    //console.log('data sendPost ==>', data);
    const route = 'posts/';
    const response = await CRUD.postForm(route, data);
    console.log('response sendPost ==>', response);
    navigate('/')
  };

  const redirect = () => {
    navigate('../postList/')
  }

  return (
    <Formik
      initialValues={{
        type: 'météo',
        title: 'climat du jour',
       // author: '',
        body: 'un truc à dire',
      //  img: null
      }}
      onSubmit={(values) => {
        const payload = {
          ...values,
          //author: "test",
          // img: {
          //   originalName: values.img.name,
          //   type:  values.img.type,
          //   fileName:  values.img.name,
          //   path:  values.img.webkitRelativePath,
          //   size:  values.img.size
          // }
        }
        console.log('{values,payload} ==> ',{values,payload});
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

                <Field
                  id="body"
                  name="body"
                  type="text"
                />

                {/* <label htmlFor="img">image</label>
                <input
                  id="img"
                  name="img"
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files[0]
                    console.log('file postForm==>setFileValue ',file)
                    props.setFieldValue('img', file)
                  }}
                /> */}
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