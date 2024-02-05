import { React, useState, useEffect } from 'react'
import CRUD from '../../business/api-requests/CRUD';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from "react-router-dom";
import { useAuthStore } from '../../store-zustand/authStore';
import Img from '../../components/imgs/img-list';
import { Card } from '@mui/material';




const PostList = () => {
  const store = useAuthStore(state => state)
  const navigate = useNavigate();
  const [posts, setpost] = useState([])


  const allPosts = async () => {
    const posts = await CRUD.getForm('posts/', { populate: ['img', 'author'] })
    setpost(posts)
  };

  const deletePost = async (postId) => {
    const route = `posts/${postId}`
    const response = await CRUD.deleteFormById(route);
    if (response === 401) {
      navigate('auth/')
    }
    allPosts()
  };

  const redirect = (route) => {
    navigate(route)
  };

  useEffect(() => {
    allPosts()
  }, []);

  if (posts.length != 0) {


    return (
      <>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>List des posts</TableCell>
                <TableCell align="right">type</TableCell>
                <TableCell align="right">author</TableCell>
                <TableCell align="right">title</TableCell>
                <TableCell align="right">body</TableCell>
                {/* <TableCell align="right">image</TableCell> */}
                <TableCell align="right">img</TableCell>
                <TableCell align="right"> ******** </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {posts.map((post) => (

                <TableRow
                  key={post._id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row"></TableCell>
                  {/* <TableCell align="right">{post._id}</TableCell> */}
                  <TableCell align="right">{post.type}</TableCell>
                  <TableCell align="right">{post.author.firstName}</TableCell>
                  <TableCell align="right">{post.title}</TableCell>
                  <TableCell align="right">{post.body}</TableCell>
                  <TableCell align="right">
                 
                  <img
                    width="50 px"
                    // src={post.img ?  `http://localhost:3000/static/${post.img.fileName}`: 'http://localhost:3000/static/No-image.jpg'}
                    src={post.img ?  `${import.meta.env.VITE_STATIC_HOST}/static/${post.img.fileName}`: `${import.meta.env.VITE_STATIC_HOST}/static/No-image.jpg`}
                    alt="image"
                    //alt={post.img.title}
                    loading="lazy"
                  />

                    {/* <Img
                      props={post} /> */}

                  </TableCell>
                  <TableCell align="justify">
                    <Button
                      color='error'
                      onClick={() => deletePost(post._id)}
                      fullwidth={'false'}
                      size='small'>
                      {'SUPPRIMER'}
                    </Button>
                    <Button
                      color='info'
                      onClick={() => redirect(`posts/${post._id}`)}
                      fullwidth={'false'}
                      size='small'>
                      {'Update'}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Button
            color='info'
            onClick={() => redirect(`/posts/new`)}
            fullwidth={'false'}
            size='medium'>
            {'poster du contenu'}
          </Button>
        </TableContainer>
      </>
    );
  } else {
    return (
      <>
        <Card>
          {'aucun post à afficher'}
        </Card>
        <Button
          color='info'
          onClick={() => redirect(`/posts/new`)}
          fullwidth={'false'}
          size='medium'>
          {'poster du contenu'}
        </Button>
      </>
    )
  }
};

export default PostList