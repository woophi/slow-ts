import { Emojies } from 'core/emoji/emoji';
import { ParticipantType } from './participant';

export type Answer = {
  emoji: Emojies;
  text: string;
  id: string;
};

export type Question = {
  step: number;
  question: string;
  backgroundCard: string;
  answers: QuizAnswerPayload[];
};

export type ResponseQuiz = {
  questions: { [step: number]: Question };
  friendUserName: string;
};

export type ResponseRandomQuiz = {
  vkUserId: number;
} & ResponseQuiz;

export enum QuizView {
  Preview = 'preview',
  Start = 'start',
  Process = 'process',
  Finish = 'finish',
  NothingHere = 'nothingHere',
}

export type QuizHistory = 'back' | 'forward' | 'init';

export type QuizAnswerPayload = { exact?: boolean } & Answer;

export type QuizViewPayload = {
  view: QuizView | null;
  history?: QuizHistory;
  type?: ParticipantType;
};

export type ChangeQuizPayload = {
  nextStep: number;
  answers?: QuizAnswerPayload[];
  name: SelectedQuiz;
};

export type SelectQuizPayload = { selected: SelectedQuiz; data?: QuizDict };

export type UpdateQuizSettingsPayload = {
  activeStep: number;
  color?: string;
  answers?: QuizAnswerPayload[];
  question?: string;
  name: SelectedQuiz;
};

export enum SelectedQuiz {
  FriendQuiz = 'friend_quiz',
  CustomQuiz = 'custom_quiz',
}

export type QuizState = {
  view: QuizView;
  history: QuizView[];
  quizzes: QuizzesDict;
  selectedQuiz: SelectedQuiz;
  finishing: boolean;
  emojiToChangeAnswerId: string;
};

export type QuestionsDict = {
  [step: number]: Question;
};

export type QuizzesDict = {
  [key in SelectedQuiz]?: QuizDict;
};

export type QuizDict = {
  questions: QuestionsDict;
  activeStep: number;
};
