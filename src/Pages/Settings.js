import ConnectionIndicator from "../Components/ConnectionIndicator";
import InfoSettings from "../Components/InfoSettings";
import TopChange from "../Components/TopChange";
import BottomChange from "../Components/BottomChange";
import React from "react";

class Settings extends React.Component {

  render() {
    return (
      <div className="settingsPage page">
          <ConnectionIndicator />
          <InfoSettings />
          <TopChange />
          <BottomChange />
          <button className="btn settings-btn green-btn" onClick={() => this.props.changeValue("main")}>Главное меню</button>
      </div>
    );
  }
}

export default Settings;
