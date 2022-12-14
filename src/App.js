import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Information } from './components/Information';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Access } from './components/Access';

function App() {
  return (
    <div id="outer-container">
      <Header></Header>
      <Routes>
        <Route path="/temple-page" element={<Main />} />
        <Route path="/temple-page/information" element={<Information />} />
        <Route path="/temple-page/about" element={<About />} />
        <Route path="/temple-page/access" element={<Access />} />
        <Route path="/temple-page/contact" element={<Contact />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
