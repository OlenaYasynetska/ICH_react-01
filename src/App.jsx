import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.css';

import ImageComponent from './components/ImageComponent/ImageComponent';
import VideoComponent from './components/VideoComponent/VideoComponent';
import ParagraphsComponent from './components/ParagraphsComponent/ParagraphsComponent';
import ListsComponent from './components/ListsComponent/ListsComponent';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : '';
  }, [darkMode]);

  return (
    <div className="App">
      <button className="theme-toggle" onClick={() => setDarkMode(prev => !prev)}>
        {darkMode ? 'Светлая тема' : 'Тёмная тема'}
      </button>

      <ImageComponent />
      <ParagraphsComponent />
      <VideoComponent />
      <ListsComponent />
    </div>
  );
}

export default App;

