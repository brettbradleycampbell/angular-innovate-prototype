import { Question } from './question';

export const QUESTIONS: Question[] = [
  {
    id: 1,
    questionText: 'What is your age?',
    questionGroup: 1,
    questionType: 'multipleChoice',
    answers: ['18 - 24', '25 - 34', '35 - 44', '45 - 54', '55+'],
    skipLogic: true,
    reportingVisualizationType: 'Multiple'
  },
  {
    id: 2,
    questionText: 'What state do you live in?',
    questionGroup: 1,
    questionType: 'select',
    answers: ['AL', 'AK', 'AZ', 'AR', 'CA - Long answer text and answer text and answer text and answer text and answer text and answer text and answer text and answer text and'],
    skipLogic2: true,
    reportingVisualizationType: 'Bar Chart'
  },
  {
    id: 3,
    questionText: 'How likely are you to recommend our business to a friend or colleague?',
    questionGroup: 2,
    questionType: 'npm',
    displayLogic: true,
    skipLogicDestination: true,
    reportingVisualizationType: 'Line Graph'
  },
  {
    id: 4,
    questionText: 'Please rate your experience.',
    questionGroup: 2,
    questionType: 'scale',
    answerElementType: 'stars',
    displayLogicHide: true,
    reportingVisualizationType: 'Pie Chart'
  },
  {
    id: 5,
    questionText: 'Please rate your experience.',
    questionGroup: 2,
    questionType: 'scale',
    answerElementType: 'hearts',
    skipLogicDestination2: true,
    reportingVisualizationType: 'Table'
  },
  {
    id: 6,
    questionText: 'Please rate your experience.',
    questionGroup: 2,
    questionType: 'scale',
    answerElementType: 'numbers',
  },
];
