import { useReducer } from 'react'

import {
  SET_STAR_COUNT,
  SET_IS_CORRECT,
  SET_IS_ANSWERED,
  SET_CORRECT_ANSWER_INDEX,
  SET_CHOICES
} from './types'
import questionReducer from './reducer'

const useQuestion = () => {
  const [questionState, dispatch] = useReducer(questionReducer, {
    starCount: 0,
    isAnswered: false,
    isCorrect: false,
    correctAnswerIndex: -1,
    choices: []
  })

  const setStarCount = starCount => {
    dispatch({ type: SET_STAR_COUNT, payload: { starCount } })
  }

  const setIsAnswered = isAnswered => {
    dispatch({ type: SET_IS_ANSWERED, payload: { isAnswered } })
  }

  const setIsCorrect = isCorrect => {
    dispatch({ type: SET_IS_CORRECT, payload: { isCorrect } })
  }

  const setCorrectAnswerIndex = correctAnswerIndex => {
    dispatch({ type: SET_CORRECT_ANSWER_INDEX, payload: { correctAnswerIndex } })
  }

  const setChoices = choices => {
    dispatch({ type: SET_CHOICES, payload: { choices } })
  }

  return [
    questionState,
    setStarCount,
    setIsAnswered,
    setIsCorrect,
    setCorrectAnswerIndex,
    setChoices
  ]
}

export default useQuestion
