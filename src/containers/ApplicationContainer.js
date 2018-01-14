import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetch as fetchApplications } from '../actions/applications'
import Title from '../components/Title'
import ApplicationItem from './ApplicationItem'
import ApplicationEditor from './ApplicationEditor'
import EditTable from '../components/EditTable'
import {PropTypes} from 'prop-types'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { baseTheme } from 'material-ui/styles/baseThemes/darkBaseTheme'

class ApplicationContainer extends PureComponent {
  componentWillMount() {
    this.props.dispatch(fetchApplications())
}
  renderApplication(application, index) {
    return (
    <ApplicationItem className="application-item" key={index} {...application} />
  )
  }
  getChildContext () {
    return {muiTheme: getMuiTheme(baseTheme)}
  }

  static childContextTypes = {
    muiTheme: PropTypes.object.isRequired
  }

  render() {
    const headers = [
      {value: 'Company', type: 'TextField', width: 200},
      {value: 'Vacancy', type: 'TextField', width: 200},
      {value: 'City', type: 'TextField', width: 150},
      {value: 'Date of application', type: 'DatePicker', width: 200},
      {value: 'Web-site', type: 'TextField', width: 200},
      {value: 'Active', type: 'Toggle', width: 50},
    ]


    const onChange = (row) => {
      console.log(row)
    }

    const onDelete = (e) => {
      console.log(e)
    }

    return(
      <div className="application wrapper">
      <ApplicationEditor />
        <header>
          <Title content="All applications" />
        </header>
        <main>
        <EditTable
          onChange={onChange}
          onDelete={onDelete}
          rows={this.props.applications}
          headerColumns={headers}
          enableDelete={true}
        />
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({ applications }) => ({ applications })

export default connect(mapStateToProps)(ApplicationContainer)
