import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Search from './components/Search';
import Sidebar from './components/sidebar'; // Assuming Sidebar is a part of your layout

function App() {
    return (
        <Router>
            <div>
                <Sidebar /> {/* If you want a sidebar in all routes */}
                <nav>
                    <Link to="/search">Go to Search</Link>
                </nav>
                <Routes>
                    <Route path="/search" element={<Search />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
