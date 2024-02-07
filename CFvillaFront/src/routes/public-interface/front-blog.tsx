import { useEffect, useState } from 'react';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CRUD from '../../business/api-requests/CRUD';
import { Post } from '../../business/types/CRUD.types';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions, rgbToHex } from '@mui/material';
import { Container, Box, Grid } from '@mui/material';

/// <reference types="vite/client" />






const FrontBlog = () => {
  const [posts, setpost] = useState<Post[]>([]);

  const fetchPosts = async () => {
    const posts = await CRUD.getForm('posts/', { populate: ['img', 'author'] })
    if (posts !== undefined && Array.isArray(posts)) {
      setpost(posts)
    }
  };

  useEffect(() => {
    fetchPosts()
  }, []);

  return (
    <>
      <body>
        <header className='headerBlog'>
          <div>
            Entre les hommes et les dieux
          </div>
        </header>
        <main className="mainBlog">
          <section className='cards'>
            <div className="card"> CARD1 </div>
            <div className="card"> CARD2 </div>
            <div className="card"> CARD3 </div>
            <div className="card"> CARD4 </div>
            <div className="card"> CARD5 </div>
            <div className="card"> CARD6 </div>
            <div className="card"> CARD7 </div>
            <div className="card"> CARD8 </div>
            <div className="card"> CARD9 </div>
            <div className="card"> CARD10 </div>
            <div className="card"> CARD11 </div>
            <div className="card"> CARD12 </div>
          </section>
          <section className='aside'>
            <div className='navBar'>
              NAV-BAR
            </div>
          </section>
        </main>
        <footer className='footerBlog'>
          FOOTER
        </footer>
      </body>


    </>
  )
};

export default FrontBlog
//{ }

// <Box sx={{
//   flexGrow: 1,
//   height: '100vh',
//   backgroundImage: (`${import.meta.env.VITE_STATIC_HOST}/static/backGround.jpeg`),
//   backgroundSize: 'cover'
// }}>
//   <Container sx={{ paddingTop: 4 }}>
//     <Grid container spacing={2}>
//       {posts.map((post, index) => (
//         <Grid item key={index} xs={12} sm={6} md={4}>
//           <Card

//             sx={{
//               bgcolor: 'darkcyan',
//               maxWidth: '75%'
//             }}>
//             <CardMedia
//               sx={{ height: 140 }}
//               image={post.img && typeof post.img !== 'string' ? `${import.meta.env.VITE_STATIC_HOST}/static/${post.img.fileName}` : `${import.meta.env.VITE_STATIC_HOST}/static/No-image.jpg`}
//               title={post.title}
//             />
//             <CardContent>
//               <Typography gutterBottom variant="h5" component="div">
//                 {post.title}
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 {post.body}
//               </Typography>
//             </CardContent>
//             <CardActions>
//               <Button size="small">Learn More</Button>
//             </CardActions>
//           </Card>
//         </Grid>
//       ))}
//     </Grid>
//   </Container>
// </Box>