import { React } from "react";
import { useFormik } from 'formik';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CRUD from "../../business/api-requests/CRUD";
import { useAuthStore } from "../../store-zustand/authStore";
//import { useAuthStore } from "../../store/authStore";
//import { useNavigate } from "react-router-dom";
//import { GetToken } from '../../services/auth.services';
const defaultTheme = createTheme();
const SignIn = () => {
  const currentUser = useAuthStore(state => state.currentUser)
  console.log(currentUser)
  const formik = useFormik({

    initialValues: {
      adressMail: 'louis@gmail.com',
      formPassword: "password"
    },

    onSubmit: (values) => {
      postCheckAndRedirect(values)
    },

  });
//==========↓↓↓ à déplacer
  const postCheckAndRedirect = async (data) => {
    console.log(data);
    try {
      const route = 'auth/';
      const response = await CRUD.postForm(data, route);
      if (response.status === 200) {
        const userId = response.data.id;
        const token = response.data.token
        console.log('userId : ',userId);
        console.log('token : ',token);
        //loadUserInfos(userId);
      }

      //*↓↓↓ Yup fonctionne très bien avec Formik... just saying ^^
      else if (response.status === 401) {
        navigate('/auth')
        alert("Utilisateur inexistant");
      }
      else if (response.status === 418) {
        navigate('/auth')
        alert('I refuse the attempt to brew coffee    with a      teapot.')
      }
      else {
        console.log(`(4)response stringifié dans signIn.postCkeckAndRedirect ===> ${JSON.stringify(response)}`);//!LOG
      }
    }
    catch (error) {
      console.log("LOGIN POST TO API OR RESPONSE FAILED");
      console.log(`ERROR: ===> ${error}`);
    }
  };
//==========↑↑↑ à déplacer
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
              formPassword="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.formPassword}
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
