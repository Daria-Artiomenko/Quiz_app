import React from 'react'
import QuizForm from '../../components/quizForm/QuizForm'
import ButtonSecondary from '../../components/buttonSecondary/ButtonSecondary'

export const QuizConfigPage: React.FC = () => {

    const handleViewStats = () => {
        //
    }
  return (
    <>
        <ButtonSecondary styles='w-56 h-12 mx-auto absolute top-5 right-5' onClick={handleViewStats} label="See My Stats"/>
        <QuizForm/>
    </>
  )
}
