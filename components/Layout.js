import { Sora } from '@next/font/google';

// Font settings
const sora = Sora({
  subsets: ['latin'],
  variable: '--font-score',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

// Components
import Nav from '../components/Nav';
import Header from '../components/Header';
import GlobalBackground from '../components/GlobalBackground';

const Layout = ({ children }) => {
  return (
    <div className={`page bg-primary text-white ${sora.variable} font-sora relative overflow-x-hidden min-h-screen`}>
      <GlobalBackground />
      <Nav />
      <Header />
      <main className="relative z-10">
        {children}
      </main>
    </div>
  );
};

export default Layout;
