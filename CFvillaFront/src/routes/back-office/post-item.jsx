import { React, useState, useEffect } from 'react'
import CRUD from "../../business/api-requests/CRUD";
import { useParams } from "react-router-dom";
import PostForm from '../../components/postForm/post-form'


const PostItem = () => {
  console.log('ici')

  const params = useParams();

  const id = params.id;
  const [post, setpost] = useState();

  const goToPostForm = async () => {
    if (id == 'new') {
      setpost()
    } else {
      const route = `posts/${id}`;
      const post = await CRUD.getForm(route);
      setpost(post)
    }
  };

  useEffect(() => {
    goToPostForm();
  }, [id]);

  return (
    <PostForm
      post={post}

    />
  )
}

export default PostItem