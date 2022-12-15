import './app.css';
import React from 'react';

import { Footer } from './components/footer';
import { Header } from './components/header';
import { logger } from './logger';

export const App = () => {
    logger.info('Start up App');

    return (
        <main>
            <Header />
            <Footer />
        </main>
    );
};
