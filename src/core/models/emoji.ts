import { Emojies } from 'core/emoji/emoji';

export enum Emoji {
  HandHi = 'hand_hi',
  Fire = 'fire',
  ShakeHands = 'shake_hands',
  AlarmClock = 'alarm_clock',
  HandOk = 'hand_ok',
  PencilPaper = 'pencil_paper',
}

export const EmojiReplace = {
  coffee: { new: Emojies.HotBeverage },
  herb: { new: Emojies.Herb },
  fuji: { new: Emojies.MountFuji },
  palm: { new: Emojies.PalmTree },
  football: { new: Emojies.SoccerBall },
  basketball: { new: Emojies.Basketball },
  nice_smile: { new: Emojies.HuggingFace },
  just_smile: { new: Emojies.ThinkingFace },
  money: { new: Emojies.MoneyWithWings },
  heart: { new: Emojies.HeartSuit },
  burger: { new: Emojies.Hamburger },
  dish: { new: Emojies.ForkAndKnifeWithPlate },
  cat: { new: Emojies.CatFace },
  dog: { new: Emojies.DogFace },
  popcorn: { new: Emojies.Popcorn },
  ps_joystick: { new: Emojies.VideoGame },
  summer: { new: Emojies.BeachWithUmbrella },
  winter: { new: Emojies.Snowboarder },
  night: { new: Emojies.NewMoonFace },
  day: { new: Emojies.FullMoonFace },
};
