import React from 'react';
import PostList from './post-list/post-list'
import NavBar from './nav-bar/nav-bar';
import classes from './index-admin.module.css';
import { Container } from '@mantine/core'
import { Affix, Transition } from '@mantine/core';

const IndexAdmin = () => {



  return (

    <>
      <Container
        display='flex'
        flex-direction='column'
        flex-wrap='nowrap'
        justify-content='flex-start'
        align-items='stretch'
      >
        <div className="flex-items">
          <PostList />
        </div>
        <div className="flex-items">
          <Affix position={{ bottom: 20, right: 20 }}>
            <NavBar />
          </Affix>
        </div>
      </Container>
    </>
  )
}

export default IndexAdmin

