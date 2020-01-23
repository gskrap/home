import React from 'react'
import resume from '../assets/resume.pdf'

import '../styles/BoxContent.css'

class BoxContentResume extends React.Component {
  render() {
    return (
      <div className="content">
        <a href={resume} className="resume-link">
          <img src={process.env.PUBLIC_URL + "/big-sheet.png"} alt=""/>
        </a>
      </div>
    )
  }
}

export default BoxContentResume
