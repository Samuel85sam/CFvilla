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



const PostList = () => {

  const navigate = useNavigate();
  const [posts, setpost] = useState([])
  const allPosts = async () => {
    // const posts = await CRUD.getForm('posts/', { populate: ['img', 'author'] })
    const posts = await CRUD.getForm('posts/')
    //console.log('posts ===>', posts);
    setpost(posts)
  };

  useEffect(() => {
    allPosts()
  }, []);

  const deletePost = (postId) => {
    console.log('postId index.deletePost ==> ', postId);
    const route = `posts/`
    CRUD.deleteForm(route, postId)
  };
//TODO: req.params ==> postId ↑↑↑
  const redirect = () => {
    navigate('../postForm')
  };

  //   const post = (id, author, img, title, body) => {
  //     return {id, author, img, title, body}
  // }
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>List des posts</TableCell>
              <TableCell align="right">id</TableCell>
              {/* <TableCell align="right">author</TableCell>
              <TableCell align="right">img</TableCell> */}
              <TableCell align="right">title</TableCell>
              <TableCell align="right">body</TableCell>
              <TableCell align="right"> ******** </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {posts.map((post) => (
              <TableRow
                key={post._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {post.title}
                </TableCell>
                <TableCell align="right">{post._id}</TableCell>
                {/* <TableCell align="right">{post.author.firstName}</TableCell> */}
                {/* <TableCell align="right">{post.img.path}</TableCell> */}
                {/* <img
                  with= "50 px"
                  height="50 px"
                  src={`http://localhost:3000/static/${post.img.fileName}`}
                  alt={post.img.title}
                  loading="lazy"
                /> */}
                <TableCell align="right">{post.title}</TableCell>
                <TableCell align="right">{post.body}</TableCell>
                <Button
                  color='error'
                  onClick={() => deletePost(post._id)}
                  fullwidth={'false'}
                  size='small'>
                  {'SUPPRIMER'}
                </Button>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Button
          color='warning'
          onClick={redirect}
          fullwidth={'false'}
          size='medium'>
          {'poster du contenu'}
        </Button>
      </TableContainer>
    </>
  );
};





export default PostList