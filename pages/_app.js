import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import Layout from '../components/Layout';
import { ThemeProvider } from "next-themes";

const MyApp = ({ Component, pageProps }) => {
  return (
      <ThemeProvider attribute="class">
        <Layout>
            <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
  );
}

export default MyApp;