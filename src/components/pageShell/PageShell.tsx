import React, { ReactElement } from 'react';
import Header from './Header';
import Footer from './Footer';

type PageShellProps = {
    children: ReactElement;
}
function PageShell(props: PageShellProps) {
    const { children } = props;
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}

export default PageShell;
