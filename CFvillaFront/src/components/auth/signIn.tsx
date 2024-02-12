import React from "react";
import { useFormik, Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import CRUD from "../../business/api-requests/CRUD";
import { useNavigate } from "react-router-dom";
import { NewUserData, useAuthStore } from "../../store-zustand/authStore";
import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from '@mantine/core';
import classes from './signIn.module.css';

const SignIn = () => {
  const setUserData = useAuthStore((state) => state.addUserData);
  const navigate = useNavigate();

  const SignupSchema = Yup.object().shape({
    adressMail: Yup.string()
      .email('Invalid email')
      .required('Required'),
    password: Yup.string()
      .min(6,'must be min 6 char')
      .required('Required')
  })

  const formik = useFormik({

    initialValues: {
      adressMail: 'samuel@gmail.com2',
      password: ""
    },
    validationSchema: SignupSchema,

    onSubmit: async (values) => {
      console.log('test');

      const response = await CRUD.auth(values);

      if (response?.status === 401) {
        console.log('adresse mail ou password incorrect')
        alert('adresse mail ou password incorrect')
        navigate('/auth')
      }
      if (response?.status === 404) {
        navigate('/auth')
      } else {
        if (response !== undefined) {
          const userData: NewUserData = {
            currentUser: response.data.id,
            jwt: response.data.jwt,
            isAuthenticated: true
          }
          setUserData(userData)
          navigate('/posts')
        }
      }
    }
  });
  console.log(formik);

  return (
    <>
      <Container size={420} my={40}>
        <form
        onSubmit={formik.handleSubmit}
        >
          <Title ta="center" className={classes.title}>
            Welcome back!
          </Title>
          <Paper withBorder shadow="md" p={30} mt={30} radius="md">
            <TextInput label="Email" placeholder="you@mantine.dev" required
              id="email"
              name="adressMail"
              type="email"
              error={formik.errors.adressMail}
              onChange={formik.handleChange}

              value={formik.values.adressMail} />
            <PasswordInput label="Password" placeholder="Your password" required mt="md"
              id="password"
              name="password"
              type="password"
              error={formik.errors.password}
              onChange={formik.handleChange}
              value={formik.values.password} />
            <Group justify="space-between" mt="lg">
            </Group>
            <Button
              fullWidth mt="xl"
              type="submit"
            >
              Sign in
            </Button>
          </Paper>
        </form>
      </Container>
    </>

  )
}


export default SignIn

{/* < form onSubmit = { formik.handleSubmit } >
  <ThemeProvider theme={defaultTheme}>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Connexion à votre espace personnel
        </Typography>
        <label htmlFor="email">email Address</label>
        <input
         
        />
        <label htmlFor="password">Password</label>
        <input
          
        />
        <Button
         
        >
          Sign In
        </Button>
        <Grid item xs>
          <Link href="#" variant="body2">
            Forgot password?
          </Link>
        </Grid>
      </Box>
    </Container>
  </ThemeProvider>
  </form > */}
