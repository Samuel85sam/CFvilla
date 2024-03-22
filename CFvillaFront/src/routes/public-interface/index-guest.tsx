import React, { useState, useEffect } from 'react';
import FrontBlog from '../../components/front/article-list/front-blog';
import Header, { Link } from '../../components/front/header/header';
import Footer from '../../components/front/footer/footer';
import '@mantine/core/styles/BackgroundImage.css';
import Contact from '../../components/front/header/contact/contact';
import { AppShell, Group } from '@mantine/core';
import Description from '../../components/front/header/pricing/pricing';
import Reservation from '../../components/front/header/reservation/reservation';
import Autre from '../../components/front/carousels/autre/autre';
import Exterieur from '../../components/front/carousels/exterieur/extérieur';
import Interieur from '../../components/front/carousels/interieur/intérieur';
import Piscine from '../../components/front/carousels/piscine/piscine';
import classes from './index-guest.module.css';

const links: Link[] = [
    { link: 'Contact', label: 'Contact', Component: <Contact /> },
    { link: 'Pricing', label: 'Pricing', Component: <Description /> },
    { link: 'Reservation', label: 'Reservation', Component: <Reservation /> }
];

const IndexGuest = () => {
    let [state, setState] = useState(links[0]);
    useEffect(() => {
        function handleScroll() {
            const scrollPosition = window.scrollY;
            const maxScroll = document.body.scrollHeight - window.innerHeight;
            const opacity = 1 - scrollPosition / maxScroll;
            document.documentElement.style.setProperty('--background-opacity', opacity.toString());
        }

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Appeler handleScroll() une fois au chargement pour initialiser l'opacité
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <AppShell>
                <div
                    className={classes.backGround}

                >
                <AppShell.Header withBorder={false} style={{ backgroundColor: 'transparent' }}>
                    <Header state={state} links={links} setState={setState} />
                </AppShell.Header>

                <AppShell.Main>
                        <div
                            className={classes.main}

                        >
                   
                        <Group gap={100} >
                            <Interieur />
                            <Exterieur />
                            <Piscine />
                            <Autre />
                        </Group>
                        </div>
                    
                </AppShell.Main>

                <AppShell.Aside withBorder={false} style={{ width: 250, backgroundColor: 'transparent' }}>
                    {state.Component}
                </AppShell.Aside>

                <AppShell.Footer withBorder={false} style={{ backgroundColor: 'transparent' }}>
                    <Footer />
                </AppShell.Footer>
                </div>
            </AppShell>
        </>
    );
}

export default IndexGuest;
