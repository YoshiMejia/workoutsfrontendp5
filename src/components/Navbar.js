import React from 'react';
import { Home } from './Home';
import WorkoutsContainer from '../containers/WorkoutsContainer';
import PlannersContainer from '../containers/PlannersContainer';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const Navbar = (props) => {
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
            </nav>
            </div>
        <div className ="routes">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="planners" element={<PlannersContainer store={props.store}/>} />
                <Route path="workouts" element={<WorkoutsContainer store={props.store}/>} />
            </Routes>
        </div>
        </BrowserRouter>
    </div>
  );
};

export default Navbar;