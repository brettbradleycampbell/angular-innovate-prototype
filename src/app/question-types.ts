import { QuestionType } from './question-type';

export const QUESTIONTYPES: QuestionType[] = [
  {
    type: 'Multiple Choice',
    // name: 'Multiple Choice',
    icon: 'list_alt', // 'format_list_bulleted', // 'list_alt', //
  },
  {
    type: 'Statement',
    // name: 'Statement',
    icon: 'notes', // 'subject',  // 'format_quote',
  },
  {
    type: 'Dropdown List',
    // name: 'Dropdown List',
    icon: 'expand_more',
  },
  {
    type: 'Text Entry',
    // name: 'Text Entry',
    icon: 'chat_bubble_outline', // 'comment', // 'add_comment', // 'notes',
  },
  {
    type: 'Scale',
    // name: 'Scale',
    icon: 'star_outline', // 'star',
  },
  {
    type: 'NPS',
    // name: 'NPS',
    icon: 'trending_up',
  },
  {
    type: 'Rank',
    // name: 'Rank',
    icon: 'swap_vert',
  },
  {
    type: 'File Upload',
    // name: 'File Upload',
    icon: 'attachment',
  },


];
