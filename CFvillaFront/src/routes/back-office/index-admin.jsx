import { useNavigate } from 'react-router-dom';
import PostList from './post-list'
import { Button } from '@mui/material'


const Index = () => {
  const navigate = useNavigate()


    const logout = () => {
        localStorage.removeItem('currentUser')
        window.location.reload();
        navigate('/')
    };
  return (

    <>
      <PostList />
      <div id='logoutButton'>
        <Button color='primary'
          onClick={logout}
          fullwidth={'false'}
          size='medium'>
          {"se Déconnecter "}
        </Button>
      </div>
    </>
  )
}

export default Index