export type UserData = {
  id: string;
  name: string;
  profilePicture: string;
  password: string;
  email: string;
  role: string;
  createdAt: string;
  updatedAt: string;
};

export type UsersState = Record<string, UserData>;

export interface UsersAppAction {}

export type UsersStateSlice = UsersState & UsersAppAction;
