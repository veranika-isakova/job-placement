import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Title from '../components/Title'
//import './BatchItem.css'


export class ApplicationItem extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
    vacancyName:  PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    dateOfApplication: PropTypes.string.isRequired,
    vacancyUrl: PropTypes.string.isRequired,
  }

  render() {
    const { _id, title, companyName, vacancyName, city, dateOfApplication, vacancyUrl } = this.props

    return(
      <article className="ApplicationItem">
        <header>
          <a href={`/applications/${_id}`}>
            <Title content={title} className="level-2" />
          </a>

        </header>

        <div>
          <p>Name of the company: {companyName}</p>
          <p>Vacancy: {vacancyName}</p>
          <p>City: {city}</p>
          <p>Date of the application: { new Date(dateOfApplication).toLocaleDateString("nl-NL") }</p>
          <p>Link to the vacany: {vacancyUrl}</p>
        </div>

      </article>
    )
  }
}

const mapStateToProps = ({ applications }) => ({ applications })

export default connect(mapStateToProps)(ApplicationItem)
