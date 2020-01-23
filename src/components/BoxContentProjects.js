import React from 'react'

import '../styles/BoxContent.css'

class BoxContentProjects extends React.Component {
  render() {
    return (
      <div className="content">
        <div className="projects-container">
          <div className="cols-2 margin-auto">
            <div className="left center">
              <div className="proj-top">
                CDI Schedule<br/>
                ♪┏-(^.^)-┛
              </div>
              <div className="proj-middle">
                Commercial Dance 2017<br/>
                Teacher profiles<br/>
                Student schedules<br/>
                Admin entitlements<br/>
              </div>
              <div className="proj-bottom">
                <div><a href="https://github.com/gskrap/cdi-api">API</a></div>
                <div><a href="https://github.com/gskrap/cdi-front-end">Front End</a></div>
              </div>
            </div>
            <div className="right center">
              <div className="proj-top">
                Sudoku Solver<br/>
                ¯\_(ツ)_/¯
              </div>
              <div className="proj-middle">
                Input a Sudoku puzzle<br/>
                Solve it instantly<br/>
                Get one hint at a time<br/>
                Or reveal the solution<br/>
              </div>
              <div className="proj-bottom">
                <div><a href="http://gskrap-sudoku.herokuapp.com/">Live</a></div>
                <div><a href="http://github.com/gskrap/sudoku-solver">Code</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BoxContentProjects
