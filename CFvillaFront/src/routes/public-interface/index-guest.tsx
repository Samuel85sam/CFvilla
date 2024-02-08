import React from 'react';
import FrontBlog from './article-list/front-blog';
import Header from './header/header';
import Footer from './footer/footer';




const IndexGuest = () => {

    return (
        <>
            <header>
                <Header />
            </header>
            <div>
                <FrontBlog />
            </div>
            <Footer />
        </>
    )
}

export default IndexGuest