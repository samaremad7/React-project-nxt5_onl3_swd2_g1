import { StrictMode } from 'react'    /*normal export  */
import { createRoot } from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css'
import App from './App.jsx'      /*default export  */

createRoot(document.getElementById('root')).render(
 // <StrictMode>
    <App />
 // </StrictMode>,
)
