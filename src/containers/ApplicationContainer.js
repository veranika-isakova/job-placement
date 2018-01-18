import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetch as fetchApplications } from '../actions/applications'
import { create as createApplication } from '../actions/applications'
import { update as updateApplication } from '../actions/applications'
import { remove as removeApplication} from '../actions/applications'
import Title from '../components/Title'
import EditTable from '../components/EditTable'
import {PropTypes} from 'prop-types'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { baseTheme } from 'material-ui/styles/baseThemes/darkBaseTheme'

class ApplicationContainer extends PureComponent {
  constructor(props) {

    super(props)
    this.state = {
      selectedApplications: []
    }
  }

  componentWillMount() {
    this.props.fetchApplications()
  }

  componentWillReceiveProps(nextProps) {
  if (this.props.applications !== nextProps.applications) {
    const newSelectedApplications = [];

    console.log(nextProps.applications);
    nextProps.applications.forEach(app => {
      var companyNameColumn = {value: app.companyName}
      var vacancyNameColumn = {value: app.vacancyName}
      var cityColumn = {value: app.city}
      var dateOfApplicationColumn = {value: new Date()}
      var vacancyUrlColumn = {value: app.vacancyUrl}
      var activityColumn = {value: app.activity}

      var newApplication = {columns: [
        companyNameColumn,
        vacancyNameColumn,
        cityColumn,
        dateOfApplicationColumn,
        vacancyUrlColumn,
        activityColumn
      ], _id: app._id}
      if (newApplication !== undefined) {
        newSelectedApplications.push(newApplication);
      }
    });
    this.setState({
      selectedApplications: newSelectedApplications
    });
  }
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
      {value: 'Link', type: 'TextField', width: 200},
      {value: 'Active', type: 'Toggle', width: 50},
    ]

    const onChange = (row) => {
      //console.log('onChange', row)
      //console.table(this.state)
      const application = {
        companyName: row.columns[0].value,
        vacancyName: row.columns[1].value,
        city: row.columns[2].value,
        dateOfApplication: row.columns[3].value,
        vacancyUrl: row.columns[4].value,
        activity: row.columns[5].value,
      }
      if (row._id === undefined) {
        this.props.save(application)
      } else {
        this.props.update(row._id, application)
      }
    }

    const onDelete = (e) => {
      console.log('delete', e)
      if (e.row._id !== undefined) {
        this.props.delete(e.row._id)
      }
    }
    console.log('apps', this.state.selectedApplications)
    return(

      <div className="application wrapper">

        <header>
          <Title content="All applications" />
        </header>
        <main>
        <EditTable
          onChange={onChange}
          onDelete={onDelete}
          rows={this.state.selectedApplications}
          headerColumns={headers}
          enableDelete={true}
        />
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({ applications }) => ({ applications })

const mapDispatchToProps = { save : createApplication, update: updateApplication, delete: removeApplication, fetchApplications: fetchApplications }


export default connect(mapStateToProps, mapDispatchToProps)(ApplicationContainer)
