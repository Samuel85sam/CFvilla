import { React, useState, useEffect } from 'react'
import CRUD from '../../business/api-requests/CRUD';


const FrontBlog = () => {
    const [posts, setpost] = useState([]);
    console.log('posts => blog ', posts);

    const allPosts = async () => {
        // const posts = await CRUD.getForm('posts/', { populate: ['img', 'author'] })
        const posts = await CRUD.getForm('posts/');
        setpost(posts)
    };

    useEffect(() => {
        allPosts()
    }, []);


    return (
        <>
            <h1>FrontBlog</h1>
            <h2>posts : </h2>
            <div>
                <ul>
                    {posts.map((post, index) => (
                        <li
                            key={index}
                        >
                            <h3>
                                {post.title}
                            </h3>
                            <p>
                                {post.body}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
};

export default FrontBlog