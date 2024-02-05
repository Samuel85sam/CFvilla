import React from 'react'


const Img = (props) => {
  

  const img = props.image;
  console.log({img});
  

  return (
    <>
    {img? props.img.fileName : 'pas de props'}
    </>
  )
}

export default Img