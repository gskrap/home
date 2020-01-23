import React from 'react'

import '../styles/BoxContent.css'

class BoxContentContact extends React.Component {
  render() {
    return (
      <div className="content">
        <div className="contact-link-container">
          <div className="contact-link">
            <a href="https://github.com/gskrap" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-github"/>
              <span>Github</span>
            </a>
          </div>
          <div className="contact-link">
            <a href="https://linkedin.com/in/gskrap" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-linkedin"/>
              <span>LinkedIn</span>
            </a>
          </div>
          <div className="contact-link">
            <a href="https://twitter.com/gskrapits" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-twitter"/>
              <span>Twitter</span>
            </a>
          </div>
          <div className="contact-link">
            <a href="https://facebook.com/gskrap" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-facebook"/>
              <span>Facebook</span>
            </a>
          </div>
          <div className="contact-link">
            <a href="https://instagram.com/gskrap/" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-instagram"/>
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default BoxContentContact
