import React from 'react'
import PropTypes from 'prop-types'

import {
  ScoreTextStyle,
  ScoreBarStyle,
  ScoreStatusStyle,
  BlackStyle,
  LightGrayStyle,
  GrayStyle
} from './style'

const ScoreBar = ({ currentScore, bestPossibleScore, worstPossibleScore }) => {
  return (
    <>
      <ScoreStatusStyle justifyContent='space-between'>
        <ScoreTextStyle>Score: {currentScore}%</ScoreTextStyle>
        <ScoreTextStyle>Max Score: {bestPossibleScore}%</ScoreTextStyle>
      </ScoreStatusStyle>
      <ScoreBarStyle>
        <BlackStyle width={worstPossibleScore} />
        <GrayStyle
          left={worstPossibleScore}
          width={currentScore - worstPossibleScore}
        />
        <LightGrayStyle
          left={currentScore}
          width={bestPossibleScore - currentScore}
        />
      </ScoreBarStyle>
    </>
  )
}

ScoreBar.propTypes = {
  currentScore: PropTypes.number.isRequired,
  bestPossibleScore: PropTypes.number.isRequired,
  worstPossibleScore: PropTypes.number.isRequired
}

export default ScoreBar
