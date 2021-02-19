import '../src/App.css'
import Main from './Pages/Main';
import Settings from './Pages/Settings';
import Login from './Pages/Login';
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        value: "login"
    };
    //this.changeValue = this.changeValue.bind(this);
  }

changeValue = (name) => {
  this.setState({value: name});
}

render() {
  if (this.state.value === "settings") {
    return (
      <Settings changeValue={this.changeValue} />
    );
  } else if (this.state.value === "main") {
    return (
      <Main changeValue={this.changeValue} />
    );
  } else {
    return (
      <Login changeValue={this.changeValue} />
    );
  }
}
}

export default App;
