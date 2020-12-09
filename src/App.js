import { Component } from "react";
import { CardList } from "./components/card-list/card-list.component.jsx";
import { SearchBar } from "./components/search-box/search-box.component.jsx";
import "./index.css";
import "./App.css";
// transofrming this to a class instead of function

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
    // **we only do that if we are not using arrow functions
    // this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
    // **the context is being created by the component class
    // the class itself context is diff and what sets it up is Component class
    // its being borrowed from react
  }
  componentDidMount() {}
  componentDidMount() {
    // mounted in vue
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        // **i can not update data without using setstate
        // which means that its differen from vue
        // bcs i could set using either way
        // but here i can only use setstate
        this.setState({ monsters: data });
        // so this doesnt work
        // **this.state.users = data;
      });
  }
  handleSearchInputChange(e) {
    //** */ using a method to handle changes
    // will result in having a different context
    // which means that we will not be able to set state
    // unless we bind this to the method call

    // js doesnt set the scope of the function by default
    // we need to explicity specify the context
    // we can either use bind.this at the function call
    // or specify it at the constructo by this.handlechange =this.handlechange.bind(this)
    // which is a better way so we do have to bind the call everytime
    // or we can have a better solution instead of manually binding each method by using arrow functions
    this.setState({ searchField: e.target.value });

    // setstate is async so we can not access state direclty bcs we dont know how much time
    //** */ its going to take so we need to pass another callback to the set state
  }

  //** */ by using arrow functions we are automaitcally setting the context of the function to be similar to the context of where the function was written at
  handleSearchInputChangeV2 = (e) => {
    this.setState({ searchField: e.target.value });
  };
  filteredMonesters() {
    return this.state.monsters.filter((monster) =>
      monster.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    );
  }

  render() {
    return (
      <div className="App">
        <h1 className="appHeader">Monster rodoluex</h1>

        <SearchBar
          placeholder="Search Monsters"
          handleChange={this.handleSearchInputChangeV2}
        ></SearchBar>
        {/* <input
          name=""
          type="search"
          placeholder="Search Monsters"
          id=""
          className="search-bar"
          onChange={(e) => this.handleSearchInputChange(e.target.value)}
        ></input> */}
        <CardList
          monsters={this.filteredMonesters()}
          searchField={this.state.searchField}
        >
          {/* whatever is passed in here will be under the children of the component */}
        </CardList>
      </div>
    );
  }
}

export default App;

// notes

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "Yihua",
//       monsteres: [
//         // one reason to use an internal id for this object
//         // is if i have used the iteration index as a key
//         // it would be localized to its lexical scope of the map function
//         // and would not be accessed by outsiders
//         // which is gonna make it immpossible to edit it unless we loop through it again
//         // which is super un fucking efficient
//         { name: "Frankestiiin" },
//         { name: "Hamada bomba" },
//         { name: "Adek tzmr" },
//       ],
//       users: [],
//     };
//   }
//   componentDidMount() {
//     // mounted in vue
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((data) => {
//         // i can not update data without using setstate
//         // which means that its differen fromt vue
//         // bcs i could set using either way
//         // but here i can only use setstate
//         this.setState({ users: data });

//         console.log(data);
//         // so this doesnt work
//         // this.state.users = data;
//       });
//   }

//   render() {
//     return (
//       <div className="App">
//         {/* {this.state.monsteres.map(
//           (monster, index) => (
//             // we can acutally genrate the id usng the map itself instead of writing it manually
//             (monster.id = index), (<li key={index}>{monster.name}</li>)
//           )
//         )} */}
//         {this.state.users.map((user) => (
//           <ul class="user-list" key={user.id}>
//             <h2>User Info: </h2>
//             <li class="user-list-item">Name:{user.name}</li>
//             <li class="user-list-item">Email:{user.email}</li>
//             <li class="user-list-item">Website:{user.website}</li>
//           </ul>
//         ))}
//         <hr></hr>
//         {/* {this.state.monsteres.forEach((monster)=> monster.name)} */}
//       </div>
//     );
//   }
// }
