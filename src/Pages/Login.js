import React from "react";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name : "",
            password: ""
        }

        this.handleName = this.handleName.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleName(event) {
        this.setState({name: event.target.value});
    }

    handlePassword(event) {
        this.setState({password: event.target.value});
    }

    handleSubmit(event) {
        if (this.state.name === "admin" && this.state.password === "admin") {
            this.props.changeValue("main");
        } else {
            alert("Неправильные логин/пароль");
        }
        event.preventDefault();
    }


  render() {
    return (
      <div className="loginPage page">
          <h1>Авторизация</h1>
          <form onSubmit={this.handleSubmit} className="loginForm">
                <label>Логин</label>
                <input type="text" className="textInput" value={this.state.name} onChange={this.handleName} />
                <label>Пароль</label>
                <input type="password" className="textInput" value={this.state.password} onChange={this.handlePassword} />
                <input type="submit" className="btn green-btn" value="Войти"/>
            </form>
      </div>
    );
  }
}

export default Login;
