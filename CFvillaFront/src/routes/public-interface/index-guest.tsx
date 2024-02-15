import React, { useEffect, useState } from 'react';
import FrontBlog from '../../components/front/article-list/front-blog';
import Header from '../../components/front/header/header';
import Footer from '../../components/front/footer/footer';
import '@mantine/core/styles/BackgroundImage.css';
import Pricing from '../../components/front/header/pricing';
import Contact from '../../components/back/contact/contact';
import {  AppShell } from '@mantine/core';





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
            <AppShell>
                <AppShell.Header 
                    >
                        <Header
                            state={state}
                            links={links}
                            setState={setState} />
                </AppShell.Header>
                <AppShell.Main>
                    {state === links[0] ? < Contact /> : <Pricing />}
                    <FrontBlog
                        state={state}
                    />
                </AppShell.Main>
                <AppShell.Footer>
                        <Footer />
                </AppShell.Footer>
            </AppShell>
        </>
    )
}

export default IndexGuest