import React, { useEffect, useState } from 'react';
import FrontBlog from '../../components/article-list/front-blog';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import '@mantine/core/styles/BackgroundImage.css';
import Pricing from '../../components/header/pricing';
import Contact from '../../components/contact/contact';
import { Affix } from '@mantine/core';




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
            <header  >
                <Affix position={{ top: 20 }} >
                        <Header
                            state={state}
                            links={links}
                            setState={setState} />
                </Affix>
            </header>
            <div>
                {state === links[0] ? < Contact /> : <Pricing />}
                <FrontBlog
                    state={state}
                />
            </div>
            <footer>
                <Affix position={{ bottom: 20 }}>
                    <Footer />
                </Affix>
            </footer>
        </>
    )
}

export default IndexGuest