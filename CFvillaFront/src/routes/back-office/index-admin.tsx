import React from 'react';
import PostList from '../../components/post-list/post-list'
import NavBar from '../../components/nav-bar/nav-bar';
import classes from './index-admin.module.css';
import { Affix } from '@mantine/core';


const IndexAdmin = () => {
  

  return (

    <>
      <header>
        <Affix className={classes.centeredElements} >
       header
        </Affix>
      </header>
      <div>
        <PostList />
      </div>
      <footer>
        <Affix >
          <NavBar />
        </Affix>
      </footer>
    </>
  )
}

export default IndexAdmin

