import React, { useCallback, useEffect } from 'react'
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

const UpdatePost =  () => {
  const navigate = useNavigate();
  const postId = '65b9374bafae04b47e147685'
  
// const postToUpdate = async (postId) => {
//   const route = `posts/${postId}`
//   return  await CRUD.getForm(route)
//   .then(response => response.json())
//   .then(data =>{
//     return data;
//   })
//   .catch(error => {
//     console.error('Erreur lors de la récupération des données:', error);
//     throw error; // Rejette la promesse avec l'erreur
// });
// };
const postToUpdate = async (postId) => {
  try {
      const route = `posts/${postId}`;
      const response = await CRUD.getForm(route);
      const data = await response.json();
      return data;
  } catch (error) {
      console.error('Erreur lors de la récupération des données:', error);
      throw error;
  }
};

  //TODO: gérer un props ↓↓↓
 
 
   const postToPatch = postToUpdate(postId)
   
  // console.log('  postToPatch  ==>', postToPatch);
  // console.log('  postToPatch.type  ==>', postToPatch.type);
  // console.log('  postToPatch.title ==>', postToPatch.title);
  // console.log('  postToPatch.body ==>', postToPatch.body);
  
  //const route = `posts/${postId}`
  //const postToPatch = await CRUD.getForm(route)
  
  const updatePost = async (data) => {
    //console.log('data updatePost ==>', data);
    const route = `posts/${postId}`
   
    console.log('route dans updatePost()', route);
    const response = await CRUD.patchFormById(route, data);
    console.log('response updatePost ==>', response);
    navigate('../postList/')
  };

  const redirect = () => {
    navigate('../postList/')
  }


  return (
    <Formik
      initialValues={{
        type: "type",
        title: "title",
        // author: '',
        body: "body",
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
        console.log('{values,payload} ==> ', { values, payload });
        updatePost(payload)
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
                  post to update
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
                  UPDATE POST
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

export default UpdatePost