import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MainPage } from './pages/Main';
import { InformationPage } from './pages/Information';
import { AboutPage } from './pages/About';
import { ContactPage } from './pages/Contact';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/index.html" element={<MainPage />} />
        <Route path="/information" element={<InformationPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
