import React, { Component } from "react";
import { CardList } from './components/card-list/card-list'
import { SearchBox } from './components/search-box/search-box'
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

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  render() {
    //https://stackoverflow.com/questions/24718709/reactjs-does-render-get-called-any-time-setstate-is-called
    const { monsters, searchField } = this.state;
    const filterMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase())
    });

    return (
      <div className="App">
        <h1> Monster Rolodex </h1>
        <SearchBox
          placeholder={"search monsters here!"}
          handleChange={this.handleChange}>
        </SearchBox>

        <CardList monsters={filterMonsters}>
        </CardList>
      </div>
    );
  }
}

export default App;
