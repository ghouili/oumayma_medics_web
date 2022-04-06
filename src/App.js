import './App.css';
import { Route, Routes } from 'react-router-dom'

import Navigation from './Components/Navigation';

import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'

function App() {
  return (
    <div className="App">
      <nav>
        <Navigation />
      </nav>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
