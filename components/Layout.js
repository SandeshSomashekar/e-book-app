import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";


const Layout = ({children}) => {
    const TITLE = 'NextJS Projet';
    return (
        <>
            <Head>
                <title>NextJS Project</title>
                <link rel="icon" href="favicon.ico"/>
            </Head>

            <Header></Header>
                <main>{children}</main>
            <Footer></Footer>
        </>
    );
}

export default Layout;