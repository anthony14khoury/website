import './App.css';
import Navigation from './components/navigation'
import Experience from './pages/experience';
import Projects from './pages/projects';
import Home from './pages/home'

import * as React from "react"
import { Route, Routes } from "react-router-dom"

// Font Awesome Icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faEnvelope)


function App() {
    return (
        <div className="app-container">
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </div>
  );
}

export default App;
