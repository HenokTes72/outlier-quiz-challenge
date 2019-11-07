import {
  SET_STAR_COUNT,
  SET_IS_CORRECT,
  SET_IS_ANSWERED,
  SET_CORRECT_ANSWER_INDEX,
  SET_CHOICES
} from './types'

const questionReducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_STAR_COUNT:
      return {
        ...state,
        starCount: payload.starCount
      }
    case SET_IS_ANSWERED: {
      return {
        ...state,
        isAnswered: payload.isAnswered
      }
    }
    case SET_IS_CORRECT: {
      return {
        ...state,
        isCorrect: payload.isCorrect
      }
    }
    case SET_CORRECT_ANSWER_INDEX:
      return {
        ...state,
        correctAnswerIndex: payload.correctAnswerIndex
      }
    case SET_CHOICES:
      return {
        ...state,
        choices: payload.choices
      }
    default:
      return state
  }
}

export default questionReducer
