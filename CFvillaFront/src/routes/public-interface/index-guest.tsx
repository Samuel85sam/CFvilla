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
            <AppShell
            >
                <AppShell.Header 
                    withBorder= {false}
                    style={{
                        backgroundColor:'transparent'
                      
                    }}
                    >
                          
                        <Header
                            state={state}
                            links={links}
                            setState={setState} />
                </AppShell.Header>
             
                <AppShell.Main>
        
                    <FrontBlog
                        state={state}
                        />
                </AppShell.Main>
                <AppShell.Aside
                withBorder= {false}
                style={{width: 250, backgroundColor:'transparent'}}>
                    {state === links[0] ? < Contact /> : <Pricing />}
                </AppShell.Aside>
                <AppShell.Footer
                    withBorder={false}
                    style={{
                        backgroundColor: 'transparent'

                    }}
                    >
                        <Footer />
                </AppShell.Footer>
            </AppShell>
        </>
    )
}

export default IndexGuest