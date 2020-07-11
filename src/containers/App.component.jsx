import React, {Component} from 'react';
import CardList from '../components/CardList.component';
import SearchBox from '../components/SearchBox.component';
import Scroll from '../components/Scroll.component';
import ErrorBoundry from '../components/ErrorBoundary.component';

export default class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>{return response.json();})
        .then(users=>{this.setState({robots:users})})
    }
    //Function for search box
    onSearchChange=(event)=>{
        this.setState({searchfield : event.target.value})
    }

    render(){
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        });

        return !robots.length ?
            <h1>Loading</h1>
            :
            (
                <div className="tc">
                    <h1>Employee Rolodex</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
        );
        }
};