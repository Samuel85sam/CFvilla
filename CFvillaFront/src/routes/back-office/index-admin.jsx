import { React } from 'react'
import PostList from './post-list'
import { Button } from '@mui/material'
import { useAuthStore } from "../../store-zustand/authStore";


const Index = () => {

  const setInitialState = useAuthStore((state) => state.logout);

    const logout = () => {
        setInitialState()
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