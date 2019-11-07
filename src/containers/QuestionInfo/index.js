import React from 'react'
import PropTypes from 'prop-types'

import rateIcon from 'assets/rate.png'
import { H1, Span } from 'components'
import { RateStyle } from './style'

const TOTAL_STAR = 5

const QuestionInfo = ({ starCount, questionNumber, questionsTotal }) => {
  const remainingStar = TOTAL_STAR - starCount

  return (
    <>
      <H1>
        Question {questionNumber} of {questionsTotal}
      </H1>
      <Span>Entertainment: Board Games</Span>

      {Array(starCount)
        .fill(1)
        .map((val, index) => (
          <RateStyle src={rateIcon} key={index} />
        ))}
      {Array(remainingStar)
        .fill(1)
        .map((val, index) => (
          <RateStyle src={rateIcon} key={index} disabled />
        ))}
    </>
  )
}

QuestionInfo.propTypes = {
  starCount: PropTypes.number.isRequired,
  questionNumber: PropTypes.number.isRequired,
  questionsTotal: PropTypes.number.isRequired
}

export default QuestionInfo
