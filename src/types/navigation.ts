export type AuthStackParamList = {
  Landing: undefined;
  Login: undefined;
  Signup: undefined;
};

export type AllScreenParamList = {
  name?: string;
};

export interface RootStackParamList extends AuthStackParamList {}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
