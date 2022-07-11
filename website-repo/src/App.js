import './App.css';
import Navigation from './components/navigation'
import Home from './pages/home'

// Font Awesome Icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faEnvelope)


function App() {
  return (
    <div className="App">
		
        <Navigation />
        <Home />

    </div>
  );
}

export default App;
