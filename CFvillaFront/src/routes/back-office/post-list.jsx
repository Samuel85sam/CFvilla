import { React, useState, useEffect } from 'react'
import CRUD from '../../business/api-requests/CRUD';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const PostList = () => {
  
  const [posts, setpost] = useState([])
  const allPosts = async () => {
    const posts = await CRUD.getForm('posts/')
    setpost(posts)
  };

  useEffect(() => {
    allPosts()
  }, []);

//   const post = (id, author, img, title, body) => {
//     return {id, author, img, title, body}
// }
    return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>List des posts</TableCell>
            <TableCell align="right">id</TableCell>
            <TableCell align="right">author</TableCell>
            <TableCell align="right">img</TableCell>
            <TableCell align="right">title</TableCell>
            <TableCell align="right">body</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {posts.map((post) => (
            <TableRow
              key={post.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {post.title}
              </TableCell>
              <TableCell align="right">{post.id}</TableCell>
              <TableCell align="right">{post.author}</TableCell>
              <TableCell align="right">{post.img}</TableCell>
              <TableCell align="right">{post.title}</TableCell>
              <TableCell align="right">{post.body}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};





export default PostList