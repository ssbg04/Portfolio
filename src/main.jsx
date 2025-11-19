import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Panel from './components/Panel'; // 1. Import the new Panel component
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <div className="d-flex flex-column min-vh-100"> {/* Flex container for full height */}
        <Navbar />

        {/* 2. Use the Panel component here. It handles the theme, background, 
             and flex-grow behavior internally. */}
        <Panel>
          <App />
        </Panel>

        <Footer /> {/* Footer at bottom */}
      </div>
    </ThemeProvider>
  </React.StrictMode>
);