export enum HomeView {
  Quiz = 'quizView',
  Main = 'mainView',
  Offline = 'offlineView',
  Welcome = 'welcomeView',
  Creation = 'creationView',
  Friend = 'friendView',
}

export enum WelcomeView {
  GetStarted = 'getStarted',
  StepOne = 'stepOne',
  StepTwo = 'stepTwo',
  StepThree = 'stepThree',
  StepFour = 'stepFour',
  StepFive = 'stepFive',
}

export enum AppUser {
  Yes = 'yes',
  No = 'no',
}

export type ExternalModals = 'clean_test' | 'delation' | 'settings' | null;

export enum BaseRoutes {
  home = 'home',
  creation = 'creation',
  quiz = 'quiz',
  modalSettings = 'modal-settings',
  selectedFriend = 'selected-friend',
}
