import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/Main";
import { InformationPage } from "./pages/Information";
import { AboutPage } from "./pages/About";
import { ContactPage } from "./pages/Contact";

const App: React.FC = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/index.html" element={<MainPage />} />
                <Route path="/information" element={<InformationPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
            <Footer />
        </>
    );
};

export default App;
