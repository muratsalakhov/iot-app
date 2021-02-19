import React from "react";

class InfoSettings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            topTemp: 30,
            bottomTemp: 15
        };
    }

    fetchQuotes = () => {
        fetch('https://cors-anywhere.herokuapp.com/' + 'https://dev.rightech.io/api/v1/objects/5fa9a36c606cb682b31e575a',{
            method: 'GET',
            headers: {
                credentials: 'include',
                cache: 'default',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI1ZmRjODdlOWEzYzhhODlhY2Q1MDVmNWEiLCJzdWIiOiI1ZjZiMjk1YWE3YzIzZTkzOWIzMDBiMWUiLCJncnAiOiI1ZjZiMjk1YWE3YzIzZTQyNDczMDBiMWQiLCJsaWMiOnRydWUsInVzZyI6ImFwaSIsImZ1bGwiOmZhbHNlLCJyaWdodHMiOjEuNSwiaWF0IjoxNjA4Mjg4MjMzLCJleHAiOjE2MTQ0NTk2MDB9.b1d2zAQ_JDLMoDROL0TWIbe5avDMIAKdA_FMsiIRsVk', 
                'Content-Type': 'application/json',
            }
        })
        .then(res => res.json())
        .then(
            (result) => {
            this.setState({
                topTemp: result.config.params.MAX,
                bottomTemp: result.config.params.MIN
            });
            },
            // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
            // чтобы не перехватывать исключения из ошибок в самих компонентах.
            (error) => {
            this.setState({
                isFetching: false,
                error
            });
            }
        )
    }
    componentDidMount() {
        this.fetchQuotes();
        this.timer = setInterval(() => this.fetchQuotes(), 10000)
    }
    componentWillUnmount() {
        this.timer = null;
    } 

    render() {
        return <div className="infoBlock">
            <table className="infoTable">
                <tbody>
                <tr><td>от</td><td>до</td></tr>
                <tr><td className="infoIndex">{this.state.bottomTemp}°С</td><td className="infoIndex">{this.state.topTemp}°С</td></tr>
                </tbody>
            </table>
        </div>;
    }
  }

  export default InfoSettings;