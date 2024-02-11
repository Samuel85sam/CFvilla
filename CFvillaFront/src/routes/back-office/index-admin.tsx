import React from 'react';
// import Postlist from "./post-list/bo-dasboard";
import Postlist from "./post-list/bo-dasboard";
import NavBar from '../../components/nav-bar/nav-bar';
import classes from'./index-admin.module.css';

const IndexAdmin = () => {



  return (

    <>
      <div className={classes.flexContainer}>
        <div className={classes.flexItems}></div>
        TESSSSSSSSSSSSST
          <Postlist />
        <div >
        <div className={classes.flexItems}></div>
          <NavBar />
        </div>
      </div>
    </>
  )
}

export default IndexAdmin