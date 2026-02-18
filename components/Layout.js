import { Sora } from '@next/font/google';

// Font settings
const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

// Components
import Nav from '../components/Nav';
import Header from '../components/Header';
import GlobalBackground from '../components/GlobalBackground';
import GlobalCornerDecor from '../components/GlobalCornerDecor';

const Layout = ({ children }) => {
  return (
    <div className={`page bg-primary text-white ${sora.variable} font-sora relative overflow-x-hidden min-h-screen`}>
      <GlobalBackground />
      <GlobalCornerDecor />
      <Nav />
      <Header />
      <main className="relative z-10">
        {children}
      </main>
    </div>
  );
};

export default Layout;
