import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
// Organized CSS structure
import './styles/variables.css';
import './styles/globals.css';
import './styles/utilities.css';
import './styles/animations.css';
import './styles/responsive.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'tw-elements';
import { ContextProvider } from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter>
        <ContextProvider>
            <App />
        </ContextProvider>
    </BrowserRouter>
);
