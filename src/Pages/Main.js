import ConnectionIndicator from "../Components/ConnectionIndicator";
import InfoBlock from "../Components/InfoBlock";
import ModeButtons from "../Components/ModeButtons";
import React from "react";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        name : 'settings'
    }
  }
  render() {
    return (
      <div className="mainPage page">
          <ConnectionIndicator />
          <InfoBlock />
          <ModeButtons />
          <button className="btn main-btn green-btn" onClick={() => this.props.changeValue("settings")}>Настройки</button>
      </div>
    );
  }
}

export default Main;
