import './App.css';
import Cancel from './pages/Cancel';
import Home from './pages/Home';
import Success from './pages/Success';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel /> } />
      </Routes>
    </Router>
  );
}

export default App;
