import Head from 'next/head';
import { ReactElement } from 'react';
import Header from './Header';

interface Props {
    headerText: string,
    children: ReactElement
}

const Layout = ({ headerText, children }: Props) => {

    return (
        <>
            <Header text={headerText} />
            <Head>
                <title>TTADS Next.js POC</title>
                <meta name="description" content="TTADS Next.js Proof of Concept" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {children}
        </>
    )

}

export default Layout;
