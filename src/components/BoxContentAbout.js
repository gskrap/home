import React from 'react'
import TypeWriter from 'react-typewriter'

import '../styles/BoxContent.css'

class BoxContentAbout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      typing2: 0,
      typing3: 0,
    }
  }

  delays() {
    return ([{
      at: '@',
      delay: 200
    }])
  }

  continueTyping(key) {
    setTimeout(() => {
      this.setState({[key]: 1})
    }, 100)
  }

  render() {
    return (
      <div className="content">
        <TypeWriter
          fixed={true}
          maxDelay={0}
          delayMap={this.delays()}
          typing={1}
          onTypingEnd={() => {this.continueTyping("typing2")}}>
          Full-Stack Engineer @ JPMorgan Asset MGMT<br/><br/><br/>
        </TypeWriter>
        <div className="cols-2">
          <div className="left">
            <TypeWriter
              fixed={true}
              maxDelay={0}
              typing={this.state.typing2}
              onTypingEnd={() => {setTimeout(() => {this.continueTyping("typing3")}, 21000)}}>
              Building apps for:<br/>
              - Web<br/>
              - Mobile<br/>
              - Desktop<br/><br/>
              Using tools like:<br/>
              - Angular<br/>
              - React<br/>
              - Ionic<br/><br/>
              And:<br/>
              - Spring<br/>
              - Cloud Foundry<br/>
              - Ruby on Rails<br/><br/><br/>
              Championing Agile and Lean practices to move fast!
            </TypeWriter>
          </div>
          <div id="welcome-bubble" className="right ascii">
            <TypeWriter
              fixed={true}
              maxDelay={0}
              typing={this.state.typing3}>
              <br/>
              <br/>
              <br/>
              <br/>
              {"┌-------------------------┐   "}<br/>
              {"|                         |   "}<br/>
              {"|         WELCOME         |   "}<br/>
              {"|                         |   "}<br/>
              {"└------------------------._\\   "}<br/>
            </TypeWriter>
          </div>
        </div>
      </div>
    )
  }
}

export default BoxContentAbout
