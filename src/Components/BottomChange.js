import React from "react";

class BottomChange extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userTemp: 15
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({userTemp: event.target.value});
    }
    handleSubmit(event) {
        this.fetchQuotes();
        event.preventDefault();
      }

    fetchQuotes = () => {
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
                        "MIN" : this.state.userTemp
                    }
                }
            })
        })
        .then(res => res.json())
        .then()
    }

    render() {
        return <div className="changeButtons">
            <form onSubmit={this.handleSubmit}>
                <input type="text" className="textInput" value={this.state.userTemp} onChange={this.handleChange} />
                <input type="submit" className="btn" value="Установить нижнюю температуру"/>
            </form>
        </div>;
    }
  }

  export default BottomChange;