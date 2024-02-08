import React from 'react';
import PostList from './post-list/post-list'
import NavBar from './nav-bar/nav-bar';
import classes from'./index-admin.module.css';

const IndexAdmin = () => {



  return (

    <>
      <div className={classes.flexContainer}>
        <div className={classes.flexItems}></div>
          <PostList />
        <div >
        <div className={classes.flexItems}></div>
          <NavBar />
        </div>
      </div>
    </>
  )
}

export default IndexAdmin