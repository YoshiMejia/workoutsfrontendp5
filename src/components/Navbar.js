import React from 'react';
import { Home } from './Home';
import WorkoutsContainer from '../containers/WorkoutsContainer';
import PlannersContainer from '../containers/PlannersContainer';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import GraveyardContainer from '../containers/GraveyardContainer';

const Navbar = () => {
  return (
    <div className="navbar">
        <BrowserRouter>
        <div className="links">
            <nav>
                <Link to="/">Home</Link>
            <br />
                <Link to="/planners">Planners</Link>
            <br />
                <Link to="/workouts">Workouts</Link>
            <br />
                <Link to="/graveyard">Completed Workouts</Link>
            </nav>
            </div>
        <div className ="routes">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="planners" element={<PlannersContainer />} />
                <Route path="workouts" element={<WorkoutsContainer />} />
                <Route path="graveyard" element={<GraveyardContainer />} />
            </Routes>
        </div>
        </BrowserRouter>
    </div>
  );
};

export default Navbar;