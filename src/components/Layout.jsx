import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Outlet /> {/* renders the current page */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
