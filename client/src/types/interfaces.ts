export interface IUser {
  id: number | string;
  name?: string;
  about?: string;
  active?: boolean;
  rooms?: Array<IDialog>;
}

export interface ICurrentUser extends IUser {
  friends?: Array<IUser>;
}

export interface IMessage {
  id: string | number;
  user: IUser;
  content: string;
  date: Date;
}

export interface IDialog {
  id: number | string;
  name?: string;
  users: Array<IUser>;
  messages: Array<IMessage>;
}
