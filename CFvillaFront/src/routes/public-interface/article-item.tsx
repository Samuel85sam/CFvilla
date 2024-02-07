import React from 'react'
import {useParams} from "react-router-dom";

const ArticleItem = () => {

  const idArticle = useParams()

  return (

    <div>{`${JSON.stringify(idArticle)}`}</div>

  )
}

export default ArticleItem