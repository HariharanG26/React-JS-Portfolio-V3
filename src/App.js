import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import RoutesConfig from './routes'; // Import RoutesConfig
import './styles/base.css';
import './styles/layout.css';
import './styles/animations.css';

function App() {
  return (
    <ThemeProvider>
      <Router basename="/">  {/* Set basename to root path '/' */}
        <div className="app-background"></div>
        <div className="app-container content-overlay">
          <Navbar />
          {/* Wrap RoutesConfig without AnimatePresence directly here */}
          <RoutesConfig />
          <Footer />
          <ScrollToTop />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
