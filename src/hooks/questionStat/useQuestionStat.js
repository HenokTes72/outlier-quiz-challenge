import { useReducer } from 'react'

import {
  SET_BEST_POSSIBLE_SCORE,
  SET_WORST_POSSIBLE_SCORE,
  SET_CURRENT_QUESTION,
  SET_CURRENT_QUESTION_INDEX,
  SET_CURRENT_SCORE,
  SET_INCORRECT_COUNT
} from './types'

import questionStatReducer from './reducer'

const useQuestion = () => {
  const [questionStatState, dispatch] = useReducer(questionStatReducer, {
    bestPossibleScore: 100,
    worstPossibleScore: 0,
    currentScore: 0,
    currentQuestion: '',
    currentQuestionIndex: -1,
    incorrectCount: 0
  })

  const setBestPossibleScore = bestPossibleScore => {
    dispatch({ type: SET_BEST_POSSIBLE_SCORE, payload: { bestPossibleScore } })
  }

  const setWorstPossibleScore = worstPossibleScore => {
    dispatch({ type: SET_WORST_POSSIBLE_SCORE, payload: { worstPossibleScore } })
  }

  const setCurrentScore = currentScore => {
    dispatch({ type: SET_CURRENT_SCORE, payload: { currentScore } })
  }

  const setCurrentQuestion = currentQuestion => {
    dispatch({ type: SET_CURRENT_QUESTION, payload: { currentQuestion } })
  }

  const setCurrentQuestionIndex = currentQuestionIndex => {
    dispatch({ type: SET_CURRENT_QUESTION_INDEX, payload: { currentQuestionIndex } })
  }

  const setIncorrectCount = incorrectCount => {
    dispatch({ type: SET_INCORRECT_COUNT, payload: { incorrectCount } })
  }

  return [
    questionStatState,
    setBestPossibleScore,
    setWorstPossibleScore,
    setCurrentScore,
    setCurrentQuestion,
    setCurrentQuestionIndex,
    setIncorrectCount
  ]
}

export default useQuestion
