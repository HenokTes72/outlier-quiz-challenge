import React from 'react'
import PropTypes from 'prop-types'

import { P } from 'components'

import { QuestionStyle } from './style'

const Question = ({ question }) => (
  <QuestionStyle>
    <P>{unescape(question)}</P>
  </QuestionStyle>
)

Question.propTypes = {
  question: PropTypes.string.isRequired
}

export default Question
