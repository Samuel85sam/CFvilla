import { React } from "react";
import { useFormik } from 'formik';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CRUD from "../../business/api-requests/CRUD";
import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from "axios";
import { useAuthStore } from "../../store-zustand/authStore";

const defaultTheme = createTheme();
const SignIn = () => {
  const setUserData = useAuthStore((state) => state.addUserData);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      adressMail: 'samuel@gmail.com2',
      formpassword: "password"
    },
    onSubmit: async (values) => {
      const route = 'auth';
      const response = await CRUD.post(route, values);
      if (response.status === 404) {
        console.alert('adresse mail ou password incorrect')
        navigate('/auth')
      } else {
        const userData = {
          currentUser: response.data.id,
          jwt: response.data.jwt,
          isAuthenticated: true
        }
        setUserData(userData)
        navigate('/posts')
        //window.location.reload()
      }
    }
  });


  return (
    <form onSubmit={formik.handleSubmit}>
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
              id="email"
              name="adressMail"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.adressMail}
            />
            <label htmlFor="password">Password</label>
            <input
              id="password"
              formpassword="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.formpassword}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
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
    </form>
  )
}


export default SignIn
