import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...
  constructor(props){
    super(props)
  }

  renderMyBots = () => {
    let myBots = this.props.myBots.map(robot => {
      return(
        <BotCard bot={robot} handleClick={this.props.handleClick}/>
      )
    })
    return myBots
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {/*...and here...*/}
            Your Bot Army
            {this.props.myBots ? this.renderMyBots() : <div>"no bots to be found!"</div>}

          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
