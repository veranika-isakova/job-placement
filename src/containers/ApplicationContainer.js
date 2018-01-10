import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Title from '../components/Title'
import ApplicationItem from './ApplicationItem'

class ApplicationContainer extends PureComponent {
  renderApplication(application, index) {
    return (
    <ApplicationItem className="application-item" key={index} {...application} />
  )
  }

  render() {
    const { applications } = this.props
    return(
      <div className="application wrapper">
        <header>
          <Title content="All applications" />
        </header>
        <main>
          { applications.map(this.renderApplication) }
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({ applications }) => ({ applications })

export default connect(mapStateToProps)(ApplicationContainer)
