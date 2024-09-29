// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection'; // Ensure this path is correct
import Footer from './components/Footer';
import WhoWeAre from './pages/WhoWeAre'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HeroSection />} /> {/* This should render HeroSection on home page */}
          <Route path="/who-we-are" element={<WhoWeAre />} /> 
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
