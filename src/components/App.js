import React from 'react'
import ReactGA from 'react-ga';
import Draggable from 'react-draggable'
import resume from '../assets/resume.pdf'
import Box from './Box'
import BoxContentAbout from './BoxContentAbout'
import BoxContentContact from './BoxContentContact'
import BoxContentProjects from './BoxContentProjects'
import BoxContentSnake from './BoxContentSnake'
import MyFace from './MyFace'

import '../styles/App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      about: {show: true, zIndex: 6},
      projects: {show: true, zIndex: 5},
      contact: {show: true,zIndex: 4},
      resume: {show: true, zIndex: 3},
      snake: {show: true, zIndex: 2},
      skull: {show: true, zIndex: 1},
    }
  }

  componentDidMount() {
    ReactGA.initialize('UA-112988765-1')
    ReactGA.pageview(window.location.pathname + window.location.search)
  }

  minimizedBoxes() {
    let ordered = Object.keys(this.state).sort((a, b) => {return this.state[a].zIndex - this.state[b].zIndex})
    return ordered.filter(k => this.state[k].show === false)
  }

  zIndexHandle(box, _cb) {
    let highestIndex = Math.max.apply(null, Object.keys(this.state).map(k => this.state[k].zIndex))
    this.setState({[box]: {...this.state[box], zIndex: highestIndex + 1}}, _cb)
  }

  toggleBox(box) {
    this.zIndexHandle(box, () => this.setState({[box]: {...this.state[box], show: !this.state[box].show}}))
  }

  renderTaskBar() {
    let iconMap = {
      about: "/icon-book.png",
      projects: "/icon-folder.png",
      contact: "/icon-network.png",
      resume: "/icon-page.png",
      snake: "/icon-tree.png",
      skull: "/icon-globe.png",
    }
    return (
      <div className="task-bar border">
        {this.minimizedBoxes().map((name, i) => (
          <div className="border" key={i} onClick={() => this.toggleBox(name)}>
            <img src={process.env.PUBLIC_URL + iconMap[name]} alt=""/>
            {name}
          </div>)
        )}
      </div>
    )
  }

  renderBonzi() {
    let hide = this.minimizedBoxes().length !== 5
    return (
      <Draggable>
        <div className={"bonzi" + (hide ? " hide": "")} style={{zIndex: 10001}}>
          <img src={process.env.PUBLIC_URL + "/bonzi.gif"} alt="bonzi"/>
        </div>
      </Draggable>
    )
  }

  render() {
    return (
      <div className="app">
        <header>
          <p>george skrapits</p>
        </header>
        <div className="box-container">
          <Box
            name={"About"}
            show={this.state.about.show}
            zIndex={this.state.about.zIndex}
            toggleShow={() => this.toggleBox("about")}
            setZ={() => this.zIndexHandle("about")}
            content={<BoxContentAbout/>}
          />
          <Box
            name={"Projects"}
            show={this.state.projects.show}
            zIndex={this.state.projects.zIndex}
            toggleShow={() => this.toggleBox("projects")}
            setZ={() => this.zIndexHandle("projects")}
            content={<BoxContentProjects/>}
          />
          <Box
            name={"Contact"}
            show={this.state.contact.show}
            zIndex={this.state.contact.zIndex}
            toggleShow={() => this.toggleBox("contact")}
            setZ={() => this.zIndexHandle("contact")}
            content={<BoxContentContact/>}
          />
          <Box
            id={"snake"}
            name={"Snake"}
            show={this.state.snake.show}
            zIndex={this.state.snake.zIndex}
            toggleShow={() => this.toggleBox("snake")}
            setZ={() => this.zIndexHandle("snake")}
            content={<BoxContentSnake/>}
          />
          <Box
            name={"_"}
            show={this.state.skull.show}
            zIndex={this.state.skull.zIndex}
            toggleShow={() => this.toggleBox("skull")}
            setZ={() => this.zIndexHandle("skull")}
            content={
              <div className="content">
                <img src={process.env.PUBLIC_URL + "/skull.gif"} alt=""/>
              </div>
            }
          />
          <a href={resume} className="resume-link" target="_blank">
            <img src={process.env.PUBLIC_URL + "/big-sheet.png"} alt=""/>
            <div>resume.pdf</div>
          </a>
          <MyFace/>
        </div>
        {this.renderTaskBar()}
        {this.renderBonzi()}
      </div>
    )
  }
}

export default App
