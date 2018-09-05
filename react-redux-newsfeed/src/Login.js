import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Login extends Component {
   
   constructor(props){
		super(props);
		this.state = {
			header: "Welcome to Webpack4 Starter Kit...",
			content: "Content from state...",
			data : []
		}

		/*this.setStateFunction = this.setStateFunction.bind(this);
		this.forceUpdateFunction = this.forceUpdateFunction.bind(this);
	    this.findDomNodeHandler = this.findDomNodeHandler.bind(this);*/
	}
	
	/* setStateFunction(){
		var item = "ReactState";
		var myArray = this.state.data.slice();
	  	myArray.push(item);
	  	this.setState({data:myArray});
	}

	forceUpdateFunction(){
		this.forceUpdate();
	}

	findDomNodeHandler() {
		var myDiv = document.getElementById('header');
		ReactDOM.findDOMNode(myDiv).style.color = 'blue';
	}*/

   render() {
      return (
         <div>
            <h1>Login</h1>
            <div>
				<Header headerProp= {this.state.header} />
				<Content contentProp= {this.state.data} />
				<Footer/>
			</div>
         </div>
      );
   }
}

class Header extends React.Component {
	render() {
      return (
         <div>
         	<h1 className="header" id="header">2{this.props.headerProp}</h1>
         </div>
      );
   }
}

class Content extends React.Component {
	
	/* 
	//Component Lifecycle is started
	componentWillMount() {
		console.log('Component WILL MOUNT!')
	}
	componentDidMount() {
		console.log('Component DID MOUNT!')
	}
	componentWillReceiveProps(newProps) {    
		console.log('Component WILL RECIEVE PROPS!')
	}
	shouldComponentUpdate(newProps, newState) {
		return true;
	}
	componentWillUpdate(nextProps, nextState) {
		console.log('Component WILL UPDATE!');
	}
	componentDidUpdate(prevProps, prevState) {
		console.log('Component DID UPDATE!')
	}
	componentWillUnmount() {
		console.log('Component WILL UNMOUNT!')
	} */

	render() {
      return (
         <div>
            <h1 className="content">{this.props.contentProp}</h1>
         </div>
      );
   }
}

class Footer extends React.Component {
	render() {
      return (
         <div>
            <h1 className="footer">Footer Sections is started...!</h1>
         </div>
      );
   }
}

export default Login;