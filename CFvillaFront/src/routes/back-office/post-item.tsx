import React, { useState, useEffect } from 'react'
import CRUD from "../../business/api-requests/CRUD";
import { useParams } from "react-router-dom";
import PostForm from '../../components/postForm/post-form'
import { Post } from '../../business/api-requests/CRUD.types';


const PostItem = () => {

  const params = useParams();
  const id = params.id;
  const [post, setpost] = useState<Post>();

  const goToPostForm = async () => {
    if (id == 'new') {
      setpost(undefined)
    } else {
      const route = `posts/${id}`;
      const post = await CRUD.getForm(route);
      if (post !== undefined) {
        setpost(post)
      }
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