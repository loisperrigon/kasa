// routes.js
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Accueil from '../components/accueil/accueil.js';
import NotFound from '../components/notFound/notFound';

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