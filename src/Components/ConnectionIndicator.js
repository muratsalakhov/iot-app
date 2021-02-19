import React from "react";

class ConnectionIndicator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            isFetching: true,
            error: null,
            items: []
        };
    }

    fetchQuotes = () => {
            fetch('https://cors-anywhere.herokuapp.com/' + 'https://dev.rightech.io/api/v1/users',{
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
              isLoaded: true,
              items: result.items
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
        this.timer = setInterval(() => this.fetchQuotes(), 60000)
    }
    componentWillUnmount() {
        this.timer = null;
    } 

    render() {
        if (this.state.isLoaded === true) {
            return <div className="connection"><span className="circle green"></span>Подключено</div>
        } else {
            return <div className="connection"><span className="circle red"></span>Отключено</div>
        }
    }
  }

  export default ConnectionIndicator;