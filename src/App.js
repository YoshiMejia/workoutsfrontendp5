// import logo from './logo.svg';
import React from 'react';
import './App.css';
// import WorkoutsContainer from './containers/WorkoutsContainer';
// import PlannersContainer from './containers/PlannersContainer';
// import {
//   BrowserRouter, Routes,
//   Route
// } from 'react-router-dom';
import Navbar from './components/Navbar';
// import { Home } from './components/Home';

export default class App extends React.Component {

  render(){
    return (
      <div className="App">
      <header className="App-header">
        <Navbar store={this.props.store}/>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <BrowserRouter>
          <Routes>
        {/* <div className="navbar"> 
          <Route path="/" element={<Home />} />
          <Route path="planners" element={<PlannersContainer />} />
          <Route path="workouts" element={<WorkoutsContainer store={this.props.store}/>} />
         </div>
       </Routes>
      </BrowserRouter>  */}

      {/* <WorkoutsContainer store={this.props.store}/> */}
       
       </header>
         {/* <PlannersContainer /> */}
     </div>
   );
 }

}

