import React from "react";
import style from './main.css';

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
      count : 0
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

  render() {  
     return (
        <div>
          <h1>Simple Counter</h1>
          <div>
              <button onClick={this.increment} > + </button>
              <span><b>Count:</b> { this.state.count } </span>
              <button onClick={this.decrement} > - </button>
          </div>
        </div>
     );
  }
}

export default App;
