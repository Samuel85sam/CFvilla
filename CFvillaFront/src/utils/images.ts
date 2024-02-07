import { Img } from "../business/types/CRUD.types"

export const getImageUrl = (image?: Img) => {
  if (!image) return `${import.meta.env.VITE_STATIC_HOST}/static/No-image.jpg`
  return `${import.meta.env.VITE_STATIC_HOST}/static/${image.fileName}`
}
