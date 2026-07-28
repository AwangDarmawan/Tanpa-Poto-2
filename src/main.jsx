import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "@fontsource/great-vibes";
import "@fontsource/playfair-display";
AOS.init({
  duration: 1000,
  easing: "ease-out-cubic",
  once: false,
  mirror: true,
  offset: 80,
  delay: 100,
});
import AOS from "aos";
import "aos/dist/aos.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
