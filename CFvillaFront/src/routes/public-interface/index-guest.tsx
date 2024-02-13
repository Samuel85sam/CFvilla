import React, { useEffect, useState } from 'react';
import FrontBlog from './article-list/front-blog';
import Header from './header/header';
import Footer from './footer/footer';
import '@mantine/core/styles/BackgroundImage.css';
import Pricing from '../../components/header/pricing';
import Contact from '../../components/contact/contact';
import { Link } from './header/header'




const links = [

    { link: 'Contact', label: 'Contact' },
    { link: 'pricing', label: 'Pricing' },

];




const IndexGuest = () => {

    let [state, setState] = useState(links[0]);



    useEffect(() => {
        console.log({ state });


    }, [state])


   

    return (
        <>
            <header>
                <Header
                    state={state}
                    links={links}
                    setState={setState} />
            </header>
            <div>
                {state === links[0]?  < Contact /> :  <Pricing />}               
                 <FrontBlog
                    state={state}
                />
            </div>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default IndexGuest