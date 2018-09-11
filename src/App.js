import React from "react";
import ReactDOM from "react-dom";

import style from './main.css';
import axios from "axios";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

/*const App = () => {
  return (
    <div>
      <p>Welcome to React here!</p>
    </div>
  );
}*/

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count : 0,
      persons : [],
      searchText : 'leaf123'
    }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.searchUsers = this.searchUsers.bind(this);
    this.searchInput = React.createRef();
  }
  
  increment() {
    this.setState(
      {count : this.state.count+1}
    );
  }
  
  decrement() {
    this.setState(
      {count : this.state.count-1}
    );
  }

  searchUsers(e){
    alert("hey search...!");
    this.searchInput.current.focus();
    //let criteria;
    //criteria = React.findDOMNode(this.searchInput).value.trim();
    //criteria = ReactDOM.findDOMNode(this.searchInput).value.trim();
    //const txt = this.searchInput.value;
    this.setState({searchText: e.target.value});
    alert("Data.....------"+this.props.searchtext);
  }

  componentDidMount(){
    console.log("First Render...!");
    
    /*fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(res => res.map( user => user.username ))
      .then(userNames => console.log(userNames));*/

    axios.get('https://jsonplaceholder.typicode.com/users')
     .then(
        res => {
          var persons = res.data;
          this.setState({
            persons
          })
        }
      )
  }

  render() {
    return (
      <div className="container">
        <h1>Simple Counter</h1>
        <div>
            <Time countData={this.state.count} incrementClick={this.increment} decrementClick={this.decrement} />
            <SearchBar searchData={this.searchUsers} myRefs={this.searchInput} searchTxtName={this.searchText} />          
            <Userlist myUserData={this.state.persons} />
        </div>
      </div>
     );
  }

}

class Time extends React.Component{
  render(){
    var pStyle = {
      color: 'red',
      float: 'right'
    };

    return(
      <div className="TimeCount" style={pStyle}>
        <button onClick={this.props.incrementClick} > + </button>
        <span><b>Count:</b> { this.props.countData } </span>
        <button onClick={this.props.decrementClick} > - </button>
      </div>
    );
  }
}

class SearchBar extends React.Component{  
  render(){
    var pStyle = {
      float: 'right',
      paddingRight: 33
    };

    return(
      <div className="SearchBar" style={pStyle}>
        <input type="text" placeholder="Search User" className="search"  ref={this.props.myRefs} value={this.props.searchTxtName} />
        <button onClick={this.props.searchData} > Search </button>
      </div>
    );
  }
}

class Userlist extends React.Component{
  render(){
    return (
      <div>
        <h2>Users List</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <td>ID</td>
              <td>UserName</td>
              <td>City</td>
            </tr>
          </thead>
          <tbody>
            {this.props.myUserData.map( (person,i)  => 
              <TableRow obj={person} id={i} />
              )
            }
          </tbody>  
        </table>
      </div>
    );
  }
}

class TableRow extends Userlist{
    
  render(){
    return(
      <tr key={this.props.id.toString()} id={this.props.id} >
        <td>{this.props.id}</td>
        <td>{this.props.obj.name}</td>
        <td>{this.props.obj.name}</td>
      </tr>
    );
  }
 
}

export default App;
