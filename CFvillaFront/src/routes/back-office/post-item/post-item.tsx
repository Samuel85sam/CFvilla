import React, { useState, useEffect } from 'react'
import CRUD from "../../../business/api-requests/CRUD";
import { useNavigate, useParams } from "react-router-dom";
import PostForm from '../../../components/back/postForm/post-form'
import { Post } from '../../../business/types/CRUD.types';
import { useAuthStore } from '../../../store-zustand/authStore';


const PostItem = () => {
  const navigate = useNavigate()
  const params = useParams();
  const id = params.id;
  const isAuthenticated = useAuthStore(state => state.isAuthenticated)
  
  const [post, setPost] = useState<Post>();

  const redirect = async () => {
    if (isAuthenticated === false) {
      navigate(`/article-item/${id}`)
    }
    else {
      if (id === 'new') {
       
        setPost(undefined)
      } else {
        const route = `posts/${id}`;
        const post = await CRUD.getForm(route,{ populate: ['img', 'author'] });
        if (post !== undefined && '_id' in post) {
          setPost(post)
        };
      };
    };
  };

  useEffect(() => {
    redirect();
  }, [id]);



  if (!post && id !== 'new') return <>loading...</>

  return (
    <PostForm
      post={post}

    />
  )
}

export default PostItem