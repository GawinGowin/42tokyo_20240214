// src/App.tsx

import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Privacy from './Privacy';
import Products from './Products';
import ResponsiveAppBar from './Nav';

function App() {
  return (
    <Router>
      <div>
        <ResponsiveAppBar/>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
        <nav style={{ 'borderBottom': '1px solid', 'marginBottom': '20px' }}>
          <Link to="/">ホーム</Link> | <Link to="/privacy">プライバシーポリシー</Link>
        </nav>
      </div>
    </Router>
  );
}

export default App;
