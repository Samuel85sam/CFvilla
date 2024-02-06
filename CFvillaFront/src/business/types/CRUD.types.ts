export interface User {
  _id: string
  admin: boolean
  firstName: string
  lastName: string
  adressMail: string
  jwt: string
  password: string
}

export interface Post {
  _id: string
  type: string
  title: string
  author: string | User
  body: string
  img?: string | Img
}

export interface Img {
  originalname: string
  type: string
  fileName: string
  path: string
  size: number
}

export interface AuthResponse {
  id: User["_id"]
  jwt: User["jwt"]
}

export type PostPopulatableKeys = keyof Pick<Post, 'author' | 'img'>