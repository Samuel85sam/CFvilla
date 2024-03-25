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
        handleScroll(); 
        // Appel handleScroll() une fois au chargement pour initialiser l'opacité
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Utilisation de useEffect pour démarrer le diaporama au chargement de la page
    useEffect(() => {
        const startSlideshow = () => {
            const slides = document.querySelector(`.${classes.backGround}:before`);
            let currentIndex = 0;

            const nextSlide = () => {
                slides.style.opacity = '0'; // Masque la diapositive actuelle
                currentIndex = (currentIndex + 1) % 3; // Boucle à travers les 3 images
                slides.style.backgroundImage = `url('../../img/${["8b8c7025.jpeg", "391ac2cc.jpeg", "dcdec63c.jpeg"][currentIndex]}')`;
                slides.style.opacity = '1'; // Affiche la nouvelle diapositive
            };

            setInterval(nextSlide, 10000); // Change de diapositive toutes les 10 secondes
        };

        startSlideshow();
    }, []);

    // useEffect(() => {
    //     const startSlideshow = () => {
    //         // Sélectionner l'élément parent .backGround
    //         const background = document.querySelector(`.${classes.backGround}`) as HTMLElement;

    //         // Obtenir les styles calculés du pseudo-élément ::before
    //         const computedStyles = window.getComputedStyle(background, '::before');
    //         const backgroundImage = computedStyles.getPropertyValue('background-image');

    //         let currentIndex = 0;

    //         const images = ["8b8c7025.jpeg", "391ac2cc.jpeg", "dcdec63c.jpeg"];

    //         const nextSlide = () => {
    //             background.style.opacity = '0'; // Masque la diapositive actuelle
    //             currentIndex = (currentIndex + 1) % 3; // Boucle à travers les 3 images
    //             background.style.backgroundImage = `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)), ${backgroundImage}, url('../../img/${images[currentIndex]}')`;
    //             background.style.opacity = '1'; // Affiche la nouvelle diapositive
    //         };

    //         setInterval(nextSlide, 10000); // Change de diapositive toutes les 10 secondes
    //     };

    //     startSlideshow();
    // }, []);


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

                    <AppShell.Aside
                        withBorder={false}
                        style={{
                            width: 250,
                            backgroundColor: 'rgba(255, 255, 255, 0.5)', // Fond semi-transparent
                            backdropFilter: 'blur(5px)' // Effet de flou
                        }}
                    >
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
