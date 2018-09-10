import React from "react";
import style from './main.css';
import axios from "axios";

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
      persons : []
    }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
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
              <button onClick={this.increment} > + </button>
              <span><b>Count:</b> { this.state.count } </span>
              <button onClick={this.decrement} > - </button>
              <Userlist myUserData={this.state.persons} />
          </div>
        </div>
     );
  }
}

class Userlist extends App{
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
