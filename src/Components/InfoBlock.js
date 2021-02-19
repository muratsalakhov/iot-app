import React from "react";

class InfoBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFetching: true,
            error: null,
            temp: 0,
            humidity: 0,
            windowStatus: false, // false = закрыто true = открыто
            autoMode: true // true = автоматический / false = ручной
        };
    }

    // fetch to rightech to connection check

    // https://cors-anywhere.herokuapp.com/
    // https://nameless-bastion-89230.herokuapp.com
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
                temp: result.state.temperature,
                humidity: result.state.humidity,
                windowStatus: result.state.windowstatus,
                autoMode: result.config.params.AUTOMODE
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
        this.timer = setInterval(() => this.fetchQuotes(), 7000)
    }
    componentWillUnmount() {
        this.timer = null;
    } 

    render() {
        return <div className="infoBlock">
            <table className="infoTable">
                <tbody>
                <tr><td className="infoIndex">{this.state.temp}°С</td><td className="infoIndex">{this.state.humidity}%</td></tr>
                <tr><td colSpan="2" className="infoTextIndex">Состояние окна: {this.state.windowStatus ? "открыто" : "закрыто"}</td></tr>
                <tr><td colSpan="2" className="infoTextIndex">Режим работы: {this.state.autoMode ? "автоматический" : "ручной"}</td></tr>   
                </tbody>
            </table>
        </div>;
    }
  }

  export default InfoBlock;