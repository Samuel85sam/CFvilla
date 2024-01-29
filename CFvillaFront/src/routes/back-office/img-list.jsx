import { React, useState, useEffect } from 'react'
import CRUD from '../../business/api-requests/CRUD'
import { ImageList, ImageListItem } from '@mui/material'

const ImgList = () => {

  const [imgs, setimgs] = useState([])
  const allImgs = async () => {
    const imgs = await CRUD.getForm('imgs/')
    setimgs(imgs)
  };

  useEffect(() => {
    allImgs()
  }, [])
  
  return (
    <div>
      <ImageList sx={{ width: 1, height: 1 }} variant="woven" cols={3} gap={30}>
        {imgs.map((img) => (
          <ImageListItem
            key={img._id}
          >
            <img
              src={`http://localhost:3000/static/${img.fileName}`}
              alt={img.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  )
}

export default ImgList