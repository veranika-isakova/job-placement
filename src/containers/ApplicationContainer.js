import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetch as fetchApplications } from '../actions/applications'
import Title from '../components/Title'
import ApplicationItem from './ApplicationItem'
import ApplicationEditor from './ApplicationEditor'

class ApplicationContainer extends PureComponent {
  componentWillMount() {
    this.props.dispatch(fetchApplications())
}
  renderApplication(application, index) {
    return (
    <ApplicationItem className="application-item" key={index} {...application} />
  )
  }

  render() {
    const { applications } = this.props
    return(
      <div className="application wrapper">
      <ApplicationEditor />
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
