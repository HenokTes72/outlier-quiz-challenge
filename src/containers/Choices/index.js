import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import {
  FIRST_CHOICE,
  SECOND_CHOICE,
  THIRD_CHOICE,
  FOURTH_CHOICE
} from 'utils/constants'

import { Button } from 'components'
import { ChoicesStyle, RowStyle, TextChoiceStyle } from './style'

const getChoice = (choices, index) => {
  return unescape(choices[index])
}

const Choices = ({ choices, setAnswer, isAnswered, shouldResetSelIndex }) => {
  const [selectedIndex, setSelectedIndex] = useState(-1)

  useEffect(() => {
    if (shouldResetSelIndex) setSelectedIndex(-1)
  }, [shouldResetSelIndex])

  const handleChoiceClick = choiceIndex => {
    if (!isAnswered) {
      setAnswer(choiceIndex)
      setSelectedIndex(choiceIndex)
    }
  }

  return (
    <ChoicesStyle>
      <RowStyle justifyContent='space-between' alignItems='center'>
        <Button
          onClick={() => handleChoiceClick(FIRST_CHOICE)}
          isAnswered={isAnswered}
          isActive={selectedIndex === FIRST_CHOICE}
        >
          <TextChoiceStyle>{getChoice(choices, FIRST_CHOICE)}</TextChoiceStyle>
        </Button>
        <Button
          onClick={() => handleChoiceClick(SECOND_CHOICE)}
          isAnswered={isAnswered}
          isActive={selectedIndex === SECOND_CHOICE}
        >
          <TextChoiceStyle>{getChoice(choices, SECOND_CHOICE)}</TextChoiceStyle>
        </Button>
      </RowStyle>

      {choices.length > 2 && (
        <RowStyle justifyContent='space-between' alignItems='center'>
          <Button
            onClick={() => handleChoiceClick(THIRD_CHOICE)}
            isAnswered={isAnswered}
            isActive={selectedIndex === THIRD_CHOICE}
          >
            <TextChoiceStyle>
              {getChoice(choices, THIRD_CHOICE)}
            </TextChoiceStyle>
          </Button>
          <Button
            onClick={() => handleChoiceClick(FOURTH_CHOICE)}
            isAnswered={isAnswered}
            isActive={selectedIndex === FOURTH_CHOICE}
          >
            <TextChoiceStyle>
              {getChoice(choices, FOURTH_CHOICE)}
            </TextChoiceStyle>
          </Button>
        </RowStyle>
      )}
    </ChoicesStyle>
  )
}

Choices.propTypes = {
  choices: PropTypes.array.isRequired,
  setAnswer: PropTypes.func.isRequired,
  isAnswered: PropTypes.bool.isRequired,
  shouldResetSelIndex: PropTypes.bool.isRequired
}

export default Choices
