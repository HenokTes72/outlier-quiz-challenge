import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import questions from './questions.json'
import { Flex } from 'components'
import { EASY, MEDIUM, HARD } from 'utils/constants'
import { useQuestion, useQuestionStat } from 'hooks'

import {
  ProgressBar,
  Feedback,
  QuestionInfo,
  Question,
  Choices,
  ScoreBar
} from 'containers'

const Wrapper = styled(Flex)`
  border: 5px solid #ededed;
  position: relative;
  padding-left: 80px;
  padding-right: 80px;
  padding-top: 60px;
  padding-bottom: 20px;
  height: 100%;
`

const Header = styled.div`
  margin-bottom: 50px;
`

const Upper = styled.div``
const Lower = styled.div``

function App () {
  const [
    questionState,
    setStarCount,
    setIsAnswered,
    setIsCorrect,
    setCorrectAnswerIndex,
    setChoices
  ] = useQuestion()

  const [
    questionStatState,
    setBestPossibleScore,
    setWorstPossibleScore,
    setCurrentScore,
    setCurrentQuestion,
    setCurrentQuestionIndex,
    setIncorrectCount
  ] = useQuestionStat()

  const {
    bestPossibleScore,
    worstPossibleScore,
    currentScore,
    currentQuestion,
    currentQuestionIndex,
    incorrectCount
  } = questionStatState

  const {
    starCount,
    isCorrect,
    isAnswered,
    correctAnswerIndex,
    choices
  } = questionState

  const [shouldResetSelIndex, setShouldResetSelIndex] = useState(false)

  useEffect(() => {
    setUpQuestion(questions[0])
    // eslint-disable-next-line
  }, [])

  // get answer from the user, and provide feedback
  const setAnswer = answerIndex => {
    const totalQuestions = questions.length
    let currentIncorrectCount = incorrectCount

    if (answerIndex === correctAnswerIndex) setIsCorrect(true)
    else {
      setIsCorrect(false)
      currentIncorrectCount++
      setIncorrectCount(currentIncorrectCount)
    }

    const questionsAnswered = currentQuestionIndex + 1
    const remainingQuestions = totalQuestions - questionsAnswered
    const correctAnswersSoFar = questionsAnswered - currentIncorrectCount

    const currentScorePercent = (correctAnswersSoFar / questionsAnswered) * 100
    const bestPossibleScorePercent =
      ((correctAnswersSoFar + remainingQuestions) / totalQuestions) * 100
    const worstPossibleScorePercent =
      (correctAnswersSoFar / totalQuestions) * 100

    setCurrentScore(parseInt(currentScorePercent))
    setBestPossibleScore(parseInt(bestPossibleScorePercent))
    setWorstPossibleScore(parseInt(worstPossibleScorePercent))

    setIsAnswered(true)
    setShouldResetSelIndex(false)
  }

  // prepare choices
  const setUpQuestion = questionData => {
    let index = 0
    const newChoices = []
    const {
      incorrect_answers: incorrectAnswers,
      correct_answer: correctAnswer
    } = questionData

    const numChoices = incorrectAnswers.length + 1
    const correctAnswerIndex = getRandomCorrectAnswerIndex(numChoices)

    while (index < numChoices) {
      if (index === correctAnswerIndex) newChoices.push(correctAnswer)
      else newChoices.push(incorrectAnswers.pop())
      index++
    }

    setCurrentQuestionIndex(currentQuestionIndex + 1)
    setCurrentQuestion(questionData.question)
    setStarCount(getStarFromDifficulty(questionData.difficulty.trim()))
    setCorrectAnswerIndex(correctAnswerIndex)
    setChoices(newChoices)
    setIsAnswered(false)
  }

  // the index of the correct answer should be random
  const getRandomCorrectAnswerIndex = maxNum => {
    return parseInt(Math.random() * maxNum, 10)
  }

  const getStarFromDifficulty = difficulty => {
    switch (difficulty) {
      case EASY:
        return 1
      case MEDIUM:
        return 2
      case HARD:
        return 3
      default:
        return 1
    }
  }

  // proceed to the next question
  const nextQuestion = () => {
    if (isQuestionOver()) {
      return
    }

    // update current question
    const currentQuestionData = questions[currentQuestionIndex + 1]
    setUpQuestion(currentQuestionData)
    setShouldResetSelIndex(true)
  }

  const isQuestionOver = () => currentQuestionIndex === questions.length - 1

  // how far the user has progressed
  const getProgressPercent = () => {
    return ((currentQuestionIndex + 1) / questions.length) * 100
  }

  return (
    <Wrapper flexDirection='column' justifyContent='space-between'>
      <Upper>
        <Header>
          <ProgressBar progressPercent={getProgressPercent()} />
          <QuestionInfo
            starCount={starCount}
            questionNumber={currentQuestionIndex + 1}
            questionsTotal={questions.length}
          />
        </Header>

        <Question question={currentQuestion} />
        <Choices
          choices={choices}
          setAnswer={setAnswer}
          isAnswered={isAnswered}
          shouldResetSelIndex={shouldResetSelIndex}
        />
        {isAnswered && (
          <Feedback isCorrect={isCorrect} nextQuestion={nextQuestion} />
        )}
      </Upper>
      <Lower>
        <ScoreBar
          currentScore={currentScore}
          worstPossibleScore={worstPossibleScore}
          bestPossibleScore={bestPossibleScore}
        />
      </Lower>
    </Wrapper>
  )
}

export default App
