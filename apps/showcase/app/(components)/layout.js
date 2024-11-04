import '@/assets/styles/flags.css';
import '@/assets/styles/layout/layout.scss';
import '@/assets/styles/tailwind/main.css';
import localFont from 'next/font/local';
import 'primeicons/primeicons.css';
// @todo: check this package
import { AppProvider } from '@/config/app.context';
import Script from 'next/script';
import StyleRegistry from '../registry';

const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900'
});
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900'
});

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app'
};

export default function RootLayout({ children }) {
    return (
        <html>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <Script src="/scripts/prism.js" data-manual strategy="beforeInteractive" />
                <AppProvider>
                    <StyleRegistry>{children}</StyleRegistry>
                </AppProvider>
            </body>
        </html>
    );
}
