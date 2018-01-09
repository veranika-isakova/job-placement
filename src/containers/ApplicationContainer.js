import React, { PureComponent } from 'react'
import Title from '../components/Title'

class ApplicationContainer extends PureComponent {
  renderApplication(application, index) {
    return null // this will come later
  }

  render() {
    return(
      <div className="application wrapper">
        <header>
          <Title content="All applications" />
        </header>
        <main>
          { this.props.applications.map(this.renderApplication) }
        </main>
      </div>
    )
  }
}

export default ApplicationContainer
