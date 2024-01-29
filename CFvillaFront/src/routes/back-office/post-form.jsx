import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useFormik } from 'formik';
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
  const formik = useFormik({
    initialValues: {
      type: 'String',
      title: 'String',
      author: 'id',
      body: 'String',
      img: null
    },
    onSubmit: (values) => { 
      console.log(values);
      postCheckAndRedirect(values) 
    }
   
  });

  const postCheckAndRedirect = async (data) => {
    console.log('data postChkRdrct ==>', data);
    const route = 'posts/';
    const response = await CRUD.postForm(data, route);
      navigate('/')
  };

  const redirect = () =>{
    navigate('../postList/')
  }

  return (
    <>
    <form onSubmit={formik.handleSubmit}>
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
            onChange={formik.handleChange}
            value={formik.values.type}
          />
          <label htmlFor="title">titre</label>
          <input
            id="title"
            name="title"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
          <label htmlFor="body">corps du message</label>
          <input
            id="body"
            name="body"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.body}
          />
          <label htmlFor="img">image</label>
          <input
            id="img"
            name="img"
            type="file"
            accept="image/*"
            onChange={formik.handleChange}
            //value={formik.values.img}
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
  </form>
  </>
  )
}

export default PostForm