import './app.css';

import { Footer } from './components/footer';
import { Header } from './components/header';
import { logger } from './logger';

import type { FC } from 'react';

export const App: FC = () => {
    logger.info('Start up App');

    return (
        <main>
            <Header />
            <Footer />
        </main>
    );
};
