import React from 'react';
import FrontBlog from './article-list/front-blog';
import Header from './header/header';
import Footer from './footer/footer';
import '@mantine/core/styles/BackgroundImage.css';




const IndexGuest = () => {

    return (
        <>
            <header>
                <Header />
            </header>
            <div>
                <FrontBlog />
            </div>
            <footer>
            <Footer />
            </footer>
        </>
    )
}

export default IndexGuest