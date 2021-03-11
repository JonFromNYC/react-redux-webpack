import React, { Component, useState, useEffect } from 'react';

import CardList from '../components/CardList.component';
import SearchBox from '../components/SearchBox.component';
import Scroll from '../components/Scroll.component';
import ErrorBoundry from '../components/ErrorBoundary.component';

class MainPage extends Component {

  componentDidMount() {
    this.props.onRequestRobots();
  }

  filterRobots = robots => {
    return this.props.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
    });
  }

  render() {
    const { onSearchChange, robots, isPending } = this.props;

    return isPending ?
      <h1>Loading</h1>
      :
      (
        <div className="tc">
          <h1>Employee Rolodex</h1>
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <ErrorBoundry>
              <CardList robots={this.filterRobots()} />
            </ErrorBoundry>
          </Scroll>
        </div>
      );
  }
};


export default MainPage;