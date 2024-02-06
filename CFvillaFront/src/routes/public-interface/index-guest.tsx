import { Button } from '@mui/material';
import  React  from 'react';
import { useNavigate } from 'react-router-dom';
import FrontBlog from './front-blog';


const IndexGuest = () => {

    const navigate = useNavigate();

    const login = () => {
        navigate('/auth');
    };

    return (
        <>
            <h1
            >
                <FrontBlog/>
            </h1>
            <div id='logoutButton'>
                <Button color='primary'
                    onClick={login}
                    size='medium'>
                    {"se connecter"}
                </Button>
            </div>
        </>
    )
}

export default IndexGuest