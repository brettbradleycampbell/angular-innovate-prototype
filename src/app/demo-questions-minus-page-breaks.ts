import { Question } from './question';

export const QUESTIONS: Question[] = [
  {
    id: 1,
    questionText: 'What is your age?',
    questionGroup: 1,
    questionType: 'select',
    answers: ['18 - 24', '25 - 34', '35 - 44', '45 - 54', '55+'],
    skipLogic2: true,
    reportingVisualizationType: 'Bar Chart'
  },
  {
    id: 1,
    questionText: 'What is your age?',
    questionGroup: 2,
    questionType: 'npm',
    displayLogic: true,
    skipLogicDestination: true,
    reportingVisualizationType: 'Line Graph'
  },
  {
    id: 1,
    questionText: 'What is your age?',
    questionGroup: 2,
    questionType: 'scale',
    answerElementType: 'stars',
    displayLogicHide: true,
    reportingVisualizationType: 'Pie Chart'
  },
  {
    id: 4,
    questionText: 'Please rate your experience.',
    questionGroup: 2,
    questionType: 'scale',
    answerElementType: 'stars',
    answers: ['1', '2', '3', '4', '5'],
    skipLogicDestination2: true,
    reportingVisualizationType: 'Table'
  },
  {
    id: 1,
    questionText: 'What is your age?',
    questionGroup: 1,
    questionType: 'multipleChoice',
    answers: ['18 - 24', '25 - 34', '35 - 44', '45 - 54', '55+'],
    skipLogic: true,
    reportingVisualizationType: 'Multiple'
  },

];
