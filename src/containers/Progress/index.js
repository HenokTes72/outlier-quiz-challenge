import React from 'react'
import PropTypes from 'prop-types'

import { ProgressBarStyle } from './style'

const ProgressBar = ({ progressPercent }) => (
  <ProgressBarStyle progressPercent={progressPercent} />
)

ProgressBar.propTypes = {
  progressPercent: PropTypes.number.isRequired
}

export default ProgressBar
