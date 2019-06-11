import { Question } from './question';

export const QUESTIONS: Question[] = [
  {
    id: 1,
    questionText: 'Enter your question text here.',
    questionGroup: 1,
    questionType: 'multipleChoice',
    answers: ['Choice 1', 'Choice 2', 'Choice 3'],
  },
  {
    id: 9,
    questionText: 'Choose a picture.',
    questionGroup: 3,
    questionType: 'multipleChoiceImage',
    answers: ['Yosemite', 'Yellowstone', 'Niagra Falls', 'Choice 4'],
  },
  {
    questionType: 'pageBreak',
  },
  {
    id: 2,
    questionText: 'What state do you live in?',
    questionGroup: 1,
    questionType: 'select',
    answers: ['UT', 'CA', 'AZ', 'Long answer text and answer text and answer text and answer text and answer text and answer text and answer text and answer text and'],
  },
  {
    questionType: 'pageBreak',
  },
  {
    id: 3,
    questionText: 'Please rate your experience.',
    questionGroup: 2,
    questionType: 'scale',
    answerElementType: 'npmScale',
  },
  {
    id: 4,
    questionText: 'Please rate your experience.',
    questionGroup: 2,
    questionType: 'scale',
    answerElementType: 'hearts',
  },
  {
    id: 5,
    questionText: 'Please rate your experience.',
    questionGroup: 2,
    questionType: 'scale',
    answerElementType: 'stars',
  },
  {
    questionType: 'pageBreak',
  },
  {
    id: 6,
    questionText: 'Thank you for taking this survey. ',
    questionGroup: 2,
    questionType: 'statement',
  },
  {
    questionType: 'pageBreak',
  },
  {
    id: 7,
    questionText: 'Please rank the following. ',
    questionGroup: 3,
    questionType: 'rank',
    answers: ['Apple', 'Google', 'Microsoft'],
  },
  {
    id: 8,
    questionText: 'Please rank these images.',
    questionGroup: 3,
    questionType: 'rankImage',
    answers: ['Yosemite', 'Yellowstone', 'Niagra Falls', 'Choice 4'],
  },
  {
    questionType: 'pageBreak',
  },
  {
    id: 10,
    questionText: 'Please enter your email.',
    questionGroup: 3,
    questionType: 'textEntry',
    answerElementType: 'email',
  },
  {
    id: 11,
    questionText: 'Please leave feedback',
    questionGroup: 3,
    questionType: 'textEntry',
    answerElementType: 'textarea',
  },
  {
    questionType: 'pageBreak',
  },
  {
    id: 12,
    questionText: 'Upload your file here.',
    questionGroup: 3,
    questionType: 'fileUpload',
    answerElementType: 'fileUpload',
  },

];
