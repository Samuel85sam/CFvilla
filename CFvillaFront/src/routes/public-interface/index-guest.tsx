import React, { useState } from 'react';
import FrontBlog from '../../components/front/article-list/front-blog';
import Header, { Link } from '../../components/front/header/header';
import Footer from '../../components/front/footer/footer';
import '@mantine/core/styles/BackgroundImage.css';
import Contact from '../../components/front/header/contact/contact';
import { AppShell, Box, Center, Flex } from '@mantine/core';
import Description from '../../components/front/header/pricing/pricing';
import Reservation from '../../components/front/header/reservation/reservation';
import Autre from '../../components/front/carousels/autre/autre';
import Exterieur from '../../components/front/carousels/exterieur/extérieur';
import Interieur from '../../components/front/carousels/interieur/intérieur';
import Piscine from '../../components/front/carousels/piscine/piscine';

const links: Link[] = [
    { link: 'Contact', label: 'Contact', Component: <Contact /> },
    { link: 'Pricing', label: 'Pricing', Component: <Description /> },
    { link: 'Reservation', label: 'Reservation', Component: <Reservation /> }
];

const IndexGuest = () => {
    let [state, setState] = useState(links[0]);
    return (
        <>
            <AppShell
                // header={{ height: { base: 48, sm: 60, lg: 76 } }}
                // footer={{ height: { base: 48, sm: 60, lg: 76 }}}
            >
                <AppShell.Header
                    withBorder={false}
                    style={{
                        backgroundColor: 'transparent'
                    }}
                >
                    <Header
                        state={state}
                        links={links}
                        setState={setState} />
                </AppShell.Header>

                <AppShell.Main>
                    <Interieur />
                    <br />
                    <Exterieur />
                    <br />
                    <Piscine />
                    <br />
                    <Autre />


                    {/* <FrontBlog
                        state={state}
                        /> */}
                </AppShell.Main>
                <AppShell.Aside
                    withBorder={false}
                style={{width: 250, backgroundColor:'transparent'}}
                >
                    {state.Component}
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