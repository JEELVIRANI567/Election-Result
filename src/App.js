import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Assets/Hero/Hero';
import Footer from './components/Assets/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Candidates from './components/Candidates/Candidates';
import Login from './components/Login/Login';
import Trends from './components/Trends/Trends';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{ paddingBottom: "70px" }}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Hero />} />
            <Route path='/:id/candidates' element={<Candidates />} />
            <Route path='/trends' element={<Trends />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
