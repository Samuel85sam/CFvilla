import { useNavigate } from 'react-router-dom';
import PostList from './post-list'
import { Button } from '@mui/material'
import {useAuthStore} from '../../store-zustand/authStore'


const IndexAdmin = () => {

  const navigate = useNavigate()
  const rmvData = useAuthStore(state => state.logout)

  const logout = () => {
    // localStorage.removeItem('currentUser')
    rmvData()
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

export default IndexAdmin