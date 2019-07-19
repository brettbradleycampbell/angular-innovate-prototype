import { SurveyQuestion } from './survey-question';

export const SURVEYQUESTIONS: SurveyQuestion[] = [
  {
    id: 1,
    questionText: 'What is your favorite fruit?',
    questionType: 'multipleChoice',
    answers: ['Apple', 'Orange', 'Strawberry', 'Banana'],
  },
  {
    id: 2,
    questionText: 'Select all the vegetables that you like. ',
    questionType: 'multipleChoiceCheckbox',
    answers: ['Carrots', 'Broccoli', 'Celery', 'Spinach', 'Asparagus', 'Peas'],
  },
  {
    id: 3,
    questionText: 'Please rank these in order of your preference.',
    questionType: 'rank',
    // answers: ['Choice 1', 'Choice 2', 'Choice 3'],
  },
  {
    id: 4,
    questionText: 'What state do you live in?',
    questionType: 'select',
    answers: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana'],
  },
  {
    id: 5,
    questionText: 'Please enter your email.',
    questionType: 'textEntryShort',
    // answers: ['Choice 1', 'Choice 2', 'Choice 3'],
  },

];
