export type ConfigState = {
  theme: ClientTheme;
  notifications: boolean;
  hash: number | null;
  online: boolean;
  onlineHandleActivate: boolean;
  initialQuery: string;
  isAppUser: boolean;
  activeStepUpdating: boolean;
};

export enum ClientTheme {
  oldLight = 'client_light',
  Light = 'bright_light',
  Dark = 'space_gray',
}
