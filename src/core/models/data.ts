import { BannerData } from "./ads";
import { UserDelationStatus } from "./delation";
import { DelationReason } from "./enums";
import { FriendItem, VkFriendItem } from "./friends";
import { ParticipantData, QuizParticipantResultData } from "./participant";
import { QuestionsDict, ResponseQuiz } from "./quiz";

export enum FetchingStateName {
  UserToken = "user_token",
  UserFriendsStats = "user_friends_stats",
  UserFriendsQuiz = "user_friends_quiz",
  Quiz = "quiz",
  QuizSet = "quiz_set",
  QuizDelete = "quiz_delete",
  QuizForFriend = "quiz_for_friend",
  QuizParticipant = "quiz_participant",
  QuizParticipantResult = "quiz_participant_result",
  SelectedFriendResult = "selected_friend_result",
  Ads = "ads",
  SvgResults = "svg_friend_results",
  NewDelation = "new_delation",
  DelationInfo = "delation_info",
  BanDuration = "ban_duration",
}

export enum FetchingStatus {
  Updating = 1,
  Ready,
  Error,
}

export type FetchingDataType<DK extends FetchingStateName> = {
  status: FetchingStatus;
  data?: FetchingDataInfo[DK];
  error?: any;
};

export type FetchResponse<DK extends FetchingStateName> = {
  data: FetchingDataInfo[DK];
};

export type FetchingUpdatePayload = {
  name: FetchingStateName;
  params?: any;
};

export type FetchingReadyPayload = {
  name: FetchingStateName;
  data?: any;
};

export type DataState = { [key in FetchingStateName]?: FetchingDataType<key> };

export type ParamsUpdateInfo = {
  [FetchingStateName.NewDelation]: DelationReason;
};

export type FetchingDataInfo = {
  [FetchingStateName.UserToken]: string;
  [FetchingStateName.UserFriendsStats]: VkFriendItem[];
  [FetchingStateName.UserFriendsQuiz]: FriendItem[];

  [FetchingStateName.Quiz]: QuestionsDict;
  [FetchingStateName.QuizSet]: boolean;
  [FetchingStateName.QuizDelete]: boolean;
  [FetchingStateName.QuizForFriend]: ResponseQuiz;
  [FetchingStateName.QuizParticipant]: ParticipantData;
  [FetchingStateName.QuizParticipantResult]: QuizParticipantResultData;

  [FetchingStateName.SelectedFriendResult]: QuizParticipantResultData;

  [FetchingStateName.Ads]: BannerData;
  [FetchingStateName.SvgResults]: string;

  [FetchingStateName.NewDelation]: boolean;
  [FetchingStateName.DelationInfo]: UserDelationStatus;
  [FetchingStateName.BanDuration]: string | null;
};
