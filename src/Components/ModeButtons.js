import React from "react";

class ModeButtons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userTemp: 0
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleButton = this.handleButton.bind(this);

    }

    // fetch to rightech to connection check

    fetchAutoOff = () => {
        fetch('https://cors-anywhere.herokuapp.com/' + 'https://dev.rightech.io/api/v1/objects/5fa9a36c606cb682b31e575a',{
            method: 'PATCH',
            headers: {
                credentials: 'include',
                cache: 'default',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI1ZmRjODdlOWEzYzhhODlhY2Q1MDVmNWEiLCJzdWIiOiI1ZjZiMjk1YWE3YzIzZTkzOWIzMDBiMWUiLCJncnAiOiI1ZjZiMjk1YWE3YzIzZTQyNDczMDBiMWQiLCJsaWMiOnRydWUsInVzZyI6ImFwaSIsImZ1bGwiOmZhbHNlLCJyaWdodHMiOjEuNSwiaWF0IjoxNjA4Mjg4MjMzLCJleHAiOjE2MTQ0NTk2MDB9.b1d2zAQ_JDLMoDROL0TWIbe5avDMIAKdA_FMsiIRsVk', 
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "config": {
                    "params": {
                        "USERTEMP" : this.state.userTemp,
                        "AUTOMODE" : false
                    }
                }
            })
        })
        .then(res => res.json())
        .then()
    }

    fetchAutoOn = () => {
        fetch('https://cors-anywhere.herokuapp.com/' + 'https://dev.rightech.io/api/v1/objects/5fa9a36c606cb682b31e575a',{
            method: 'PATCH',
            headers: {
                credentials: 'include',
                cache: 'default',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI1ZmRjODdlOWEzYzhhODlhY2Q1MDVmNWEiLCJzdWIiOiI1ZjZiMjk1YWE3YzIzZTkzOWIzMDBiMWUiLCJncnAiOiI1ZjZiMjk1YWE3YzIzZTQyNDczMDBiMWQiLCJsaWMiOnRydWUsInVzZyI6ImFwaSIsImZ1bGwiOmZhbHNlLCJyaWdodHMiOjEuNSwiaWF0IjoxNjA4Mjg4MjMzLCJleHAiOjE2MTQ0NTk2MDB9.b1d2zAQ_JDLMoDROL0TWIbe5avDMIAKdA_FMsiIRsVk', 
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "config": {
                    "params": {
                        "AUTOMODE" : true
                    }
                }
            })
        })
        .then(res => res.json())
        .then()
    }

    handleChange(event) {
        this.setState({userTemp: event.target.value});
    }

    handleSubmit(event) {
        this.fetchAutoOff();
        event.preventDefault();
      }

    handleButton(event) {
        event.preventDefault();
        this.fetchAutoOn();
    }

    render() {
        return <div className="modeButtons">
            <form onSubmit={this.handleSubmit}>
                <input type="text" className="textInput" value={this.state.userTemp} onChange={this.handleChange} />
                <input type="submit" className="btn" value="Установить температуру"/>
                <input type="button" onClick={this.handleButton} className="btn" value="Автоматический режим "/>
            </form>
        </div>;
    }
  }

  export default ModeButtons;