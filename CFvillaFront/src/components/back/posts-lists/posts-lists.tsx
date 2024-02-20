import React, { useState, useEffect } from 'react'
import CRUD from '../../../business/api-requests/CRUD';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { useAuthStore } from '../../../store-zustand/authStore';
import { Post } from '../../../business/types/CRUD.types';
import { SimpleGrid, Card, Image, Text, Container, AspectRatio } from '@mantine/core';
import { getImageUrl } from '../../../utils/images';
import classes from './post-list.module.css'
//import { Link } from '../header/header'

const PostList = () => {
  const store = useAuthStore(state => state)
  const navigate = useNavigate();
  const [posts, setpost] = useState<Post[]>([])

  const allPosts = async () => {
    const posts = await CRUD.getForm('posts/', { populate: ['img', 'author'] })
    if (posts !== undefined && Array.isArray(posts)) {
      setpost(posts)
    }
  };

  const deletePost = async (postId: Post["_id"]) => {
    const route = `posts/${postId}`
    const response = await CRUD.deleteFormById(route);
    if (response?.status === 401) {
      navigate('auth/')
    }
    allPosts()
  };

  const redirect = (route: string) => {
    navigate(route)
  };

  const cards = posts.map((post) => (
    <Card key={post._id} p="xl" radius="md" component="a" href="#" className={classes.card}>
      <AspectRatio ratio={1920 / 1080}>
        <Image src={getImageUrl(post.img)}
          onClick={() => { redirect(`/posts/${post._id}`) }} />
      </AspectRatio>
      <Text className={classes.title} mt={5}>
        {post.title}
      </Text>
      <Button
        color='error'
        onClick={() => deletePost(post._id)}
        size='small'
      >
        SUPPRIMER
      </Button>
      <Button
        color='info'
        onClick={() => redirect(`/posts/${post._id}`)}
        size='small'
      >
        Update
      </Button>

    </Card>
  ));

  useEffect(() => {
    allPosts()
  }, []);



  if (posts.length != 0) {


    return (
      <>
        <Container py="sm" >
          <SimpleGrid cols={{ base: 1, sm: 1 }}>{cards}</SimpleGrid>
        </Container>
      </>
    );
  } else {
    return (
      <>
        <Card>
          aucun post à afficher
        </Card>

      </>
    )
  }
};

export default PostList


//   < TableContainer component = { Paper } >
//     <Table sx={{ minWidth: 650 }} aria-label="simple table">
//       <TableHead>
//         <TableRow>
//           <TableCell>List des posts</TableCell>
//           <TableCell align="right">type</TableCell>
//           <TableCell align="right">author</TableCell>
//           <TableCell align="right">title</TableCell>
//           <TableCell align="right">body</TableCell>
//           {/* <TableCell align="right">image</TableCell> */}
//           <TableCell align="right">img</TableCell>
//           <TableCell align="right"> ******** </TableCell>
//         </TableRow>
//       </TableHead>
//       <TableBody>
//         {posts.map((post) => (

//           <TableRow
//             key={post._id}
//             sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//           >
//             <TableCell component="th" scope="row"></TableCell>
//             {/* <TableCell align="right">{post._id}</TableCell> */}
//             <TableCell align="right">{post.type}</TableCell>
//             <TableCell align="right">{typeof post.author !== 'string' ? post.author.firstName : post.author}</TableCell>
//             <TableCell align="right">{post.title}</TableCell>
//             <TableCell align="right">{post.body}</TableCell>
//             <TableCell align="right">

//               <img
//                 width="50 px"
//                 // src={post.img ?  `http://localhost:3000/static/${post.img.fileName}`: 'http://localhost:3000/static/No-image.jpg'}
//                 src={getImageUrl(post.img)}
//                 alt="image"
//                 //alt={post.img.title}
//                 loading="lazy"
//               />

//               {/* <Img
//                       props={post} /> */}

//             </TableCell>
//             <TableCell align="justify">
//               <Button
//                 color='error'
//                 onClick={() => deletePost(post._id)}
//                 size='small'
//               >
//                 SUPPRIMER
//               </Button>
//               <Button
//                 color='info'
//                 onClick={() => redirect(`/posts/${post._id}`)}
//                 size='small'
//               >
//                 Update
//               </Button>
//             </TableCell>
//           </TableRow>
//         ))}
//       </TableBody>
//     </Table>
// {/* <Button
//             color='info'
//             onClick={() => redirect(`/posts/new`)}
//             size='medium'
//           >
//             poster du contenu
//           </Button> */}
//         </TableContainer >