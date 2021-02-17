import { Emojies } from 'core/emoji/emoji';

export type ParticipantData = {
  participantSet: boolean;
  type: ParticipantType;
  finished: boolean;
};

export enum ParticipantType {
  Anon = 1,
  Public = 2,
}

export type ParticipantAnswer = {
  question: string;
  wrong: boolean;
  selectedAnswer: string;
  emoji: Emojies;
  id: string;
};

export type AnswerDict = {
  [step: number]: ParticipantAnswer;
};

export type QuizParticipantResultData = {
  finished: boolean;
  lastStep: number;
  answers: AnswerDict;
  score: {
    count: number;
    condition: string;
  } | null;
};
