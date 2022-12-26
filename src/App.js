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
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/information" element={<Information />} />
        <Route path="/about" element={<About />} />
        <Route path="/access" element={<Access />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
