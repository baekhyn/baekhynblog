import Footer from './Footer';
import Header from './Header';
import { Layout, NavContainer } from './Container.style';
import { ReactNode } from 'react';
import Nav from './Nav';
import SideProfile from './SideProfile';
import Head from 'next/head';

export default function Container({ children }: { children: ReactNode }) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Header />
            <NavContainer>
                <Nav />
            </NavContainer>
            <Layout>
                <SideProfile />
                <main>{children}</main>
            </Layout>
            <Footer />
        </>
    );
}
