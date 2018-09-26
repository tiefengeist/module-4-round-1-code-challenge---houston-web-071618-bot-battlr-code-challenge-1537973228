import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

class BotsPage extends React.Component {
  //start here with your code for step one
  constructor(props){
    super(props)

    this.state = {
      myBots: [],
      allBots: [],
    }
  }//constructor
componentDidMount(){
  console.log("Component Mounted, Fetch incoming!")
  fetch(`https://bot-battler-api.herokuapp.com/api/v1/bots`)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    this.setState({
      allBots: data
    })
  })


}//onComponentDidMount

handleClick=(e)=>{
console.log("bot ID",e)
  // get the robot and set states
  // let newBot =
  // this.setState({
  //   myBots: newBot
  // })
}

  render() {

    return (
      <div>
        {/* put your components here */}
        <YourBotArmy myBots={this.state.myBots}/>
        {this.state.allBots.length > 0 ? <BotCollection allRobots={this.state.allBots} handleClick={this.handleClick}/> : <div>Loading...</div>}
      </div>
    );
  }

}

export default BotsPage;
