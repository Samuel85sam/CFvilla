import React from 'react'
import { useNavigate } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
//import FormControlLabel from '@mui/material/FormControlLabel';
//import Checkbox from '@mui/material/Checkbox';
//import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CRUD from '../../business/api-requests/CRUD';

const defaultTheme = createTheme();

const SignUp = () => {

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();  
    const formData = new FormData(event.currentTarget)
    if (formData.get('nom') === '') {
      alert('veuillez saisir un nom.');
      return;
    }
    if (formData.get('prenom') === '') {
      alert('veuillez saisir un prenom.');
      return;
    }
    if (formData.get('mail') === '') {
      alert('veuillez saisir une adresse email.');
      return;
    }
    if (formData.get('password') === '') {
      alert('veuillez saisir un password.');
      return;
    }
    
    const data = Object.fromEntries(formData)
    postStoreAndRedirect(data)
  }
    
  const postStoreAndRedirect = async (inputValue) => {
    const formValues = inputValue
    const route = 'users/';
    const result = await CRUD.postForm(formValues, route);
    try {
      if (result.status === 201) {
        window.location.reload(true)
        console.log(" → User STORED ");
      }
      else {
        alert("REGISTER FAILED Fail");
        console.log("REGISTER FAILED ==> reload login page ");
        navigate('/auth')
      };

    } catch (error) {
      console.alert(error)
    };

  };

  return (
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
                    Enregitrez vous :
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                              
                                autoComplete="given-name"
                                name="nom"
                                required
                                fullWidth
                                id="nom"
                                label="First Name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="family-name"
                                required
                                fullWidth
                                id="prenom"
                                label="Last Name"
                                name="prenom"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="email"
                                required
                                fullWidth
                                id="mail"
                                label="mail"
                                name="mail"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="password"
                                required
                                fullWidth
                                name="password"
                                label="password"
                                type="password"
                                id="password"
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign Up
                    </Button>
                </Box>
            </Box>
        </Container>
    </ThemeProvider>
);
}

export default SignUp
