import React from 'react'
import PropTypes from 'prop-types'

import { CORRECT, SORRY } from 'utils/constants'
import { ResponseStyle, ResultStyle, NextButonStyle } from './style'

const Feedback = ({ isCorrect, nextQuestion }) => {
  return (
    <ResponseStyle flexDirection='column' alignItems='center'>
      <ResultStyle>{isCorrect ? CORRECT : SORRY}</ResultStyle>
      <NextButonStyle onClick={nextQuestion}>Next Question</NextButonStyle>
    </ResponseStyle>
  )
}

Feedback.propTypes = {
  isCorrect: PropTypes.bool.isRequired,
  nextQuestion: PropTypes.func.isRequired
}

export default Feedback
