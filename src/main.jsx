import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App.jsx';
// Import Poppins font weights from 100 to 900
import "@fontsource/poppins/100.css"; // Thin
import "@fontsource/poppins/200.css"; // Extra Light
import "@fontsource/poppins/300.css"; // Light
import "@fontsource/poppins/400.css"; // Regular
import "@fontsource/poppins/500.css"; // Medium
import "@fontsource/poppins/600.css"; // Semi-Bold
import "@fontsource/poppins/700.css"; // Bold
import "@fontsource/poppins/800.css"; // Extra Bold
import "@fontsource/poppins/900.css"; // Black


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
