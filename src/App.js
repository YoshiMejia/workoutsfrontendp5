// import logo from './logo.svg';
import React from 'react';
import './App.css';
import WorkoutsContainer from './containers/WorkoutsContainer';
import PlannersContainer from './containers/PlannersContainer';

export default class App extends React.Component {

  render(){
    return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <PlannersContainer />
        <WorkoutsContainer store={this.props.store}/>
      </header>
    </div>
  );
}

}

