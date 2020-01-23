import React from 'react'

import '../styles/Box.css'
import '../styles/BoxContent.css'
import '../styles/Snake.css'

class BoxContentSnake extends React.Component {
  constructor(props) {
    super(props)
    this.rows = 30
    this.cols = 30

    this.initialState = () => {
      return ({
        run: false,
        snake: [[2,2], [2,3], [2,4], [2,5], [2,6]],
        food: [2, 25],
        direction: 39,
        score: 0
      })
    }

    this.state = this.initialState()

    this.advanceFrame = this.advanceFrame.bind(this)
    this.handleKey = this.handleKey.bind(this)
  }

  advanceFrame() {
    if (this.state.run) {
      this.moveSnake()
      setTimeout(this.advanceFrame, 80)
    }
  }

  handleKey(e) {
    e.preventDefault()
    let code = e.nativeEvent.keyCode
    let direction = [37, 38, 39, 40].includes(code) ? code : this.state.direction
    let diff = Math.abs(this.state.direction - direction)
    if (diff !== 0 && diff !== 2) {
      this.setState({direction: direction}, this.moveSnake())
    }
  }

  moveSnake() {
    let newSnake = this.state.snake
    let oldHead = newSnake[newSnake.length - 1]
    let newHead

    switch (this.state.direction) {
      case 37: newHead = [oldHead[0], oldHead[1] - 1]; break;
      case 38: newHead = [oldHead[0] - 1, oldHead[1]]; break;
      case 39: newHead = [oldHead[0], oldHead[1] + 1]; break;
      case 40: newHead = [oldHead[0] + 1, oldHead[1]]; break;
      default: break;
    }
    
    if (this.snakeCrashed(newHead)) {
      this.setState(this.initialState)
    } else {
      if (this.foodInMouth()) {
        this.setState({score: this.state.score + 1})
        this.moveFood()
      }
      else {
        newSnake.shift()
      }
      newSnake.push(newHead)
      this.setState({snake: newSnake})
    }
  }

  snakeCrashed(newHead) {
    return (
      newHead[0] === 0 ||
      newHead[0] === this.rows + 1 ||
      newHead[1] === 0 ||
      newHead[1] === this.cols + 1 ||
      this.snakeContainsCoord(newHead)
    )
  }

  snakeContainsCoord(coord) {
    for (var i = 0; i < this.state.snake.length; i++) {
      let segment = this.state.snake[i]
      if (segment[0] === coord[0] && segment[1] === coord[1]) return true
    }
    return false
  }

  foodInMouth() {
    let head = this.state.snake[this.state.snake.length - 1]
    let food = this.state.food
    return head[0] === food[0] && head[1] === food[1]
  }

  moveFood() {
    let newFood = [(Math.floor(Math.random() * 30) + 1), (Math.floor(Math.random() * 30) + 1)]
    if (this.snakeContainsCoord(newFood)) {
      this.moveFood()
      /* you didn't win did you... ¯\_(ツ)_/¯ */
    } else {
      this.setState({food: newFood})
    }
  }

  renderStartButton() {
    if (!this.state.run) {
      return (
        <div className="start-snake dialog border">
          <div className={"top-bar"}>New Game</div>
          <div className={"btn border"} onClick={() => this.setState({run: true}, () => {this.snake.focus(); this.advanceFrame()})}>Start</div>
        </div>
      )
    }
  }

  render() {
    let grid = []
    let food = this.state.food

    for (var row = 1; row <= this.rows; row++) {
      let cells = []
      for (var col = 1; col <= this.cols; col ++) {
        cells.push(
          <div key={col} className={
            "cell" +
            (this.snakeContainsCoord([row, col]) ? " body" : "") +
            ((food[0] === row && food[1] === col) ? " food" : "")
          }/>
        )
      }
      grid.push(<div key={row} className="row">{cells}</div>)
    }

    return (
      <div className="content">
        <div className="score">{this.state.score}</div>
        {this.renderStartButton()}
        <div id="snake-grid" tabIndex="0" ref={i => {this.snake = i}} onKeyDown={this.handleKey}>
          {grid}
        </div>
      </div>
    )
  }
}

export default BoxContentSnake
