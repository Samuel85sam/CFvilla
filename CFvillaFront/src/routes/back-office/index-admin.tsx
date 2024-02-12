import React from 'react';
import PostList from './post-list/post-list'
import NavBar from './nav-bar/nav-bar';
import classes from './index-admin.module.css';
import { Container } from '@mantine/core'

const IndexAdmin = () => {



  return (

    <>
      <Container>
          <div className={classes.flexItems}></div>
          <PostList />
          <div >
            <div className={classes.flexItems}></div>
            <NavBar />
          </div>
      </Container>
    </>
  )
}

export default IndexAdmin