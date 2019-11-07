import {
  SET_BEST_POSSIBLE_SCORE,
  SET_WORST_POSSIBLE_SCORE,
  SET_CURRENT_QUESTION,
  SET_CURRENT_QUESTION_INDEX,
  SET_CURRENT_SCORE,
  SET_INCORRECT_COUNT
} from './types'

const questionStatReducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_BEST_POSSIBLE_SCORE:
      return {
        ...state,
        bestPossibleScore: payload.bestPossibleScore
      }
    case SET_WORST_POSSIBLE_SCORE: {
      return {
        ...state,
        worstPossibleScore: payload.worstPossibleScore
      }
    }
    case SET_CURRENT_QUESTION: {
      return {
        ...state,
        currentQuestion: payload.currentQuestion
      }
    }
    case SET_CURRENT_QUESTION_INDEX:
      return {
        ...state,
        currentQuestionIndex: payload.currentQuestionIndex
      }
    case SET_CURRENT_SCORE:
      return {
        ...state,
        currentScore: payload.currentScore
      }
    case SET_INCORRECT_COUNT:
      return {
        ...state,
        incorrectCount: payload.incorrectCount
      }
    default:
      return state
  }
}

export default questionStatReducer
