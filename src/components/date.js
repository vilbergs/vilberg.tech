import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const months = [
    'jan',
    'feb',
    'mar',
    'apr',
    'may',
    'jun',
    'jul',
    'aug',
    'sep',
    'okt',
    'nov',
    'des',
]

const days = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '24',
    '25',
    '26',
    '27',
    '28',
    '29',
    '30',
    '31',
]

const Date = ({ siteTitle }) => (
  <div>
      <h1>2019</h1>
      {months.map(month => (<h2 style={{display: 'inline'}}>{month}{' '}</h2>))}
      <br/>
      {days.map(day => (<h3 style={{display: 'inline'}}>{day}{' '}</h3>))}
  </div>
)

export default Date
