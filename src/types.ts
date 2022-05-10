interface UserInfo {
  name: string;
  qlogo: string;
  qq: number | string;
}

export enum MessageType {
  SUCCESS = 'success',
  FAIL = 'fail',
  LOADING = 'loading'
}

interface MessageData {
  isShow: boolean;
  type: MessageType;
  text?: string;
  duration?: number;
}

export type {
  UserInfo,
  MessageData
}