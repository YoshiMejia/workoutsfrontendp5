import React, { Component } from 'react';

class Stopwatch extends Component {

  state = {
    time: 0,
  }

  componentDidMount() {
    this.interval = setInterval(this.clockTick, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {

    const { time } = this.state
    return (
      <section className="Stopwatch">

        <h1>{ time }</h1>
        <button onClick={() => {this.setState({time: 0})}}>Restart</button>
        <button onClick={ this.stopClock }>End Timer</button>

      </section>
    );
  }

  clockTick = () => {
    this.setState(prevState => ({
      time: prevState.time+1
    }))
  }

  stopClock = () => {
    clearInterval(this.interval)
  }

}

export default Stopwatch;