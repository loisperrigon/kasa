// routes.js
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Accueil from '../components/accueil/accueil.js';
import NotFound from '../components/notFound/notFound';
import APropos from '../components/aPropos/aPropos.js';
import LocationDetail from '../components/locationDetail/locationDetail.js';

import Header from '../components/header/header.js';
import Footer from '../components/footer/footer.js';

const routerConfig = [
    {
        path: '/',
        element: (
            <>
                <Header />
                <Accueil />
                <Footer />
            </>
        ),
    },
    {
        // Route paramétrée pour le détail du logement
        path: '/location/:id',
        element: (
            <>
                <Header />
                <LocationDetail />
                <Footer />
            </>
        ),
    },
    {
        path: '/aPropos',
        element: (
            <>
                <Header />
                <APropos />
                <Footer />
            </>
        ),
    },
    {
        path: '*',
        element: (
            <>
                <Header />
                <NotFound />
                <Footer />
            </>
        ),
    },
];

export const router = createBrowserRouter(routerConfig);