import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import BotSpecs from "../components/BotSpecs"

class BotsPage extends React.Component {
  //start here with your code for step one
  constructor(props){
    super(props)

    this.state = {
      myBots: [],
      allBots: [],
      botBeingViewed: ''
    }
  }//constructor
componentDidMount(){
  console.log("Component Mounted, Fetch incoming!")
  fetch(`https://bot-battler-api.herokuapp.com/api/v1/bots`)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    const everyBot = data.map(bot => (
      {...bot, toggler: true}
    ));
    this.setState({
      allBots: everyBot
    })
  })


}//onComponentDidMount

backButton = (e) => {
  this.setState({botBeingViewed: ''})
}

enlistButton = (e) => {
  let newBot = this.state.allBots.find(bot => {return bot.id === e})
  console.log(newBot)
  this.state.myBots.includes(newBot) ? this.setState({myBots: this.state.myBots.filter(robot => {
    return robot.id !== e
    })
  }) :
  this.setState({myBots: [...this.state.myBots, newBot]})
}

handleClick = (e) => {
let newBot = this.state.allBots.find(bot => {return bot.id === e})
// this.state.myBots.includes(newBot) ? this.setState({myBots: this.state.myBots.filter(robot => {
//   return robot.id !== e
//   })
// }) :
this.state.myBots.includes(newBot) ? this.setState({myBots: this.state.myBots.filter(robot => {
  return robot.id !== e
  }),
  botBeingViewed: newBot
}):
this.setState({
               botBeingViewed: newBot})
console.log(this.state.myBots)

  // get the robot and set states
}

// newHandleClick=(e)=>{
//   let newBot = this.state.allBots.find(bot => {return bot.id === e})
//     this.setState({
//       botBeingViewed: newBot
//     })
//
// }



  render() {

    let renderer;
    if(this.state.botBeingViewed === '')
      {this.state.allBots.length > 0 ? renderer = <BotCollection allRobots={this.state.allBots} handleClick={this.handleClick}/> : renderer = <div>Loading...</div>}
      else {
        renderer = <BotSpecs
          bot={this.state.botBeingViewed} backButton={this.backButton} enlistButton={this.enlistButton}/>
      }


    return (
      <div>
        <YourBotArmy myBots={this.state.myBots} handleClick={this.handleClick}/>
        {renderer}
      </div>
    )
    // else {
    //   return (
    //     <div>
    //       <YourBotArmy />
    //     </div>
    //   )
    // }
  }

}

export default BotsPage;
