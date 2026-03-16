
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';

function App() {
  return (
    <Router>
      <div className="octofit-nav">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand octofit-link" to="/">Octofit Tracker</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"><Link className="nav-link octofit-link" to="/activities">Activities</Link></li>
                <li className="nav-item"><Link className="nav-link octofit-link" to="/leaderboard">Leaderboard</Link></li>
                <li className="nav-item"><Link className="nav-link octofit-link" to="/teams">Teams</Link></li>
                <li className="nav-item"><Link className="nav-link octofit-link" to="/users">Users</Link></li>
                <li className="nav-item"><Link className="nav-link octofit-link" to="/workouts">Workouts</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="container">
        <Routes>
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/" element={<h2 className="octofit-heading">Welcome to Octofit Tracker!</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
