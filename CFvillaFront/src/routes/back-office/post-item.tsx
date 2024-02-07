import React, { useState, useEffect } from 'react'
import CRUD from "../../business/api-requests/CRUD";
import { useNavigate, useParams } from "react-router-dom";
import PostForm from '../../components/postForm/post-form'
import { Post } from '../../business/types/CRUD.types';
import { useAuthStore } from '../../store-zustand/authStore';

const PostItem = () => {
  const navigate = useNavigate()
  const params = useParams();
  const id = params.id;
  const isAuthenticated = useAuthStore(state => state.isAuthenticated)
  const [post, setpost] = useState<Post>();

  const redirect = async () => {
    if (isAuthenticated === false) {
      navigate(`/article-item/${id}`)
    }
    else {
      if (id === 'new') {
        setpost(undefined)
      } else {
        const route = `posts/${id}`;
        const post = await CRUD.getForm(route);
        if (post !== undefined && '_id' in post) {
          setpost(post)
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