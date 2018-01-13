import React, { PureComponent } from 'react'
import toMarkdown from 'to-markdown'
import { connect } from 'react-redux'
import 'medium-editor/dist/css/medium-editor.css'
import 'medium-editor/dist/css/themes/default.css'
import createApplication from '../actions/applications/create'
import './ApplicationEditor.css'

class ApplicationEditor extends PureComponent {
  constructor(props) {
    super()

    const { title, companyName, vacancyName, city, dateOfApplication, vacancyUrl } = props

    this.state = {
      title,
      companyName,
      vacancyName,
      city,
      dateOfApplication,
      vacancyUrl
    }
  }

  updateTitle(event) {
    if (event.keyCode === 13) {
      event.preventDefault()
      this.refs.summary.medium.elements[0].focus()
    }
    this.setState({
      title: this.refs.title.value
    })
  }

  updateCompanyName(event) {
    if (event.keyCode === 13) {
      event.preventDefault()
      this.refs.summary.medium.elements[0].focus()
    }
    this.setState({
      companyName: this.refs.companyName.value
    })
  }

  updateVacancyName(event) {
    if (event.keyCode === 13) {
      event.preventDefault()
      this.refs.summary.medium.elements[0].focus()
    }
    this.setState({
      vacancyName: this.refs.vacancyName.value
    })
  }

  updateCity(event) {
    if (event.keyCode === 13) {
      event.preventDefault()
      this.refs.summary.medium.elements[0].focus()
    }
    this.setState({
      city: this.refs.city.value
    })
  }
  updateDateOfApplication(event) {
    if (event.keyCode === 13) {
      event.preventDefault()
      this.refs.summary.medium.elements[0].focus()
    }
    this.setState({
      dateOfApplication: this.refs.dateOfApplication.value
    })
  }
  updateVacancyUrl(event) {
    if (event.keyCode === 13) {
      event.preventDefault()
      this.refs.summary.medium.elements[0].focus()
    }
    this.setState({
      vacancyUrl: this.refs.vacancyUrl.value
    })
  }
  saveApplication() {

    const application = {
      ...this.state,
      companyName: toMarkdown(this.state.companyName),
      vacancyName: toMarkdown(this.state.vacancyName),
      city: toMarkdown(this.state.city),
      dateOfApplication: toMarkdown(this.state.dateOfApplication),
      vacancyUrl: toMarkdown(this.state.vacancyUrl)
    }
    this.props.save(application)
  }

  render() {
    return (
      <div className="editor">

      <div>
      <label>New application: </label>
        <input
          type="text"
          ref="title"
          className="title"
          placeholder="Application"
          defaultValue={this.state.title}
          onChange={this.updateTitle.bind(this)}
          onKeyUp={this.updateTitle.bind(this)} />
      </div>

        <div>
        <label>Name of the company </label>
          <input
            type="text"
            ref="companyName"
            className="companyName"
            defaultValue={this.state.companyName}
            onChange={this.updateCompanyName.bind(this)}
            onKeyUp={this.updateCompanyName.bind(this)} />
        </div>

        <div>
        <label>Vacancy </label>
          <input
            type="text"
            ref="vacancyName"
            className="vacancyName"
            defaultValue={this.state.vacancyName}
            onChange={this.updateVacancyName.bind(this)}
            onKeyUp={this.updateVacancyName.bind(this)} />
          </div>

        <div>
        <label>City </label>
          <input
            type="text"
            ref="city"
            className="city"
            defaultValue={this.state.city}
            onChange={this.updateCity.bind(this)}
            onKeyUp={this.updateCity.bind(this)} />
          </div>

        <div>
        <label>Date of the application </label>
            <input
              type="date"
              ref="dateOfApplication"
              className="dateOfApplication"
              defaultValue={this.state.dateOfApplication}
              onChange={this.updateDateOfApplication.bind(this)}
              onKeyUp={this.updateDateOfApplication.bind(this)} />
        </div>

        <div>
        <label>Link of the vacancy </label>
          <input
            type="text"
            ref="vacancyUrl"
            className="vacancyUrl"
            defaultValue={this.state.vacancyUrl}
            onChange={this.updateVacancyUrl.bind(this)}
            onKeyUp={this.updateVacancyUrl.bind(this)} />
          </div>

        <div className="actions">
          <button className="primary" onClick={this.saveApplication.bind(this)}>Save</button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = { save: createApplication }

export default connect(null, mapDispatchToProps)(ApplicationEditor)
