import React, { Component } from "react";
import { CardList } from './components/card-list/card-list'
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(userJson => { this.setState({ monsters: userJson }) })
  }

  render() {
    //https://stackoverflow.com/questions/24718709/reactjs-does-render-get-called-any-time-setstate-is-called
    const { monsters, searchField } = this.state;
    const filterMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase())
    });

    return (
      <div className="App">
        <input type='' placeholder='search monsters here!'
          onChange={e => this.setState({ searchField: e.target.value })} />
        <CardList monsters={filterMonsters}>
        </CardList>
      </div>
    );
  }
}

export default App;
