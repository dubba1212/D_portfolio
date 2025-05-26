import '../styles/globals.css';

//components 
import Layout from '../components/Layout';
import Transition from '../components/Transition';
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
 <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
