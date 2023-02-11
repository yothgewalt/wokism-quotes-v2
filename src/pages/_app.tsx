import 'inter-ui/inter.css';
import './../styles/globals.css';

import type { AppProps } from 'next/app';
import { IBM_Plex_Sans_Thai, Inter } from '@next/font/google';

import { DiscourseProvider } from '@contexts/core';

import { Toaster } from 'react-hot-toast';

const inter = Inter({
    weight: [
        '100', '200', '300',
        '400', '500', '600',
        '700', '800', '900'
    ],
    style: ['normal'],
    subsets: ['latin'],
    variable: '--font-inter',
});

const plexSans = IBM_Plex_Sans_Thai({
    weight: [
        '100', '200', '300',
        '400', '500', '600',
        '700'
    ],
    style: ['normal'],
    subsets: ['thai'],
    variable: '--font-plex-sans',
});

const WokismApp = ({ Component, pageProps }: AppProps) => {
    return (
        <main className={`${inter.className} ${plexSans} font-sans`}>
            <Toaster position={'top-right'} />
            <DiscourseProvider>
                <Component {...pageProps} />
            </DiscourseProvider>
        </main>
    );
};

export default WokismApp;
