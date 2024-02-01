import { Button } from '@mui/material';
import { React } from 'react';
import { useNavigate } from 'react-router-dom';


const IndexGuest = () => {


    const navigate = useNavigate();

    const login = () => {
        navigate('auth/');
    };

    return (
        <>
            <h1
            >
                FRONT GUEST 
            </h1>
            <div id='logoutButton'>
                <Button color='primary'
                    onClick={login}
                    fullwidth={'false'}
                    size='medium'>
                    {"se connecter"}
                </Button>
            </div>
        </>
    )
}

export default IndexGuest