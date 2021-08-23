import React, { Component } from 'react';
import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: '',
    }
    // console.log('constructor')
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
    // console.log('onSearchChange');
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(robot => this.setState({ robots: robot })
    )
    // console.log("componentDidMount")
  }

  render() {
    const filteredRobots = this.state.robots.filter(robot => 
      robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    );
    // console.log("render");
    if (this.state.robots === 0) {
      return <h1>Loading</h1>
    } else {
      return (
        <section className="tc">
          <h1>RoboFriends</h1>
          <ErrorBoundary>
            <SearchBox searchChange={this.onSearchChange} />
          </ErrorBoundary>
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredRobots} />
            </ErrorBoundary>
          </Scroll>
        </section>
      );
    }
  }
}

export default App;