import { createContext } from 'react';
import { UserInfo, MessageData, MessageType } from './types';

const CTX = createContext<{
  userInfo: UserInfo,
  setUserInfo: (userInfo: UserInfo) => void;
  message: MessageData;
  setMessage: (message: MessageData) => void;
}>({
  userInfo: {
    name: '',
    qlogo: '',
    qq: ''
  },
  setUserInfo: () => {},
  message: {
    isShow: false,
    text: '',
    type: MessageType.SUCCESS,
    duration: 3000
  },
  setMessage: () => {}
});

export {
  CTX
}