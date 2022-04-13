import './App.css';
import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom'
import { MainContext } from './Hooks/Context/MainContext';

import Navigation from './Components/Navigation';

import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import SideBar from './Components/SideBar';

function App() {

  const { sideBarShown } = useContext(MainContext);

  return (
    <div className="App">
      <nav>
        <Navigation />
      </nav>
      <main>
        <SideBar />
        <div className={sideBarShown ? 'routes active' : 'routes'}>
          <Routes >
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
