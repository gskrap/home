import React from 'react'
import Draggable from 'react-draggable'

import '../styles/Box.css'

class Box extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: this.props.show
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({show: nextProps.show})
  }

  render() {
    return (
      <Draggable
        disabled={Math.max(document.documentElement.clientWidth, window.innerWidth || 0) < 700}
        bounds={"parent"}
        handle={".top-bar"}
        onMouseDown={this.props.setZ}>
        <div id={this.props.id} className={"box border" + (this.state.show ? "" : " hide")} style={{zIndex: this.props.zIndex}}>
          <div className="top-bar">
            <div className="name">
              {this.props.name}
            </div>
            <div className="min-btn border" onClick={this.props.toggleShow}>_</div>
          </div>
          <div className="content-container">
            {this.props.content}
          </div>
        </div>
      </Draggable>
    )
  }
}

export default Box
