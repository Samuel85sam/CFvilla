import React from 'react';
import PostList from '../../components/back/posts-lists/posts-lists'
import NavBar from '../../components/back/nav-bar/nav-bar';
import { AppShell } from '@mantine/core';
import Header from '../../components/back/header/header';



const IndexAdmin = () => {


  return (

    <AppShell>
      <AppShell.Header  >
        <Header/>
      </AppShell.Header>
      <AppShell.Main>
        <PostList />
      </AppShell.Main>
      <AppShell.Footer>
        <NavBar />
      </AppShell.Footer>
    </AppShell>
  )
}

export default IndexAdmin

