import React, { useState } from 'react';
import './App.css';

import Input from './components/Input/Input';
import Info from './components/Info/Info';
import Message from './components/Message/Message';
import { UserInfo, MessageType, MessageData } from './types';

import { CTX } from './context';

function App() {
  const [message, setMessage] = useState<MessageData>({
    isShow: false,
    type: MessageType.SUCCESS,
    text: '',
    duration: 3000
  });
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: '',
    qlogo: '',
    qq: ''
  });

  return (
    <CTX.Provider value={{message, setMessage, userInfo, setUserInfo}}>
      <div className="App">
        <h3 className="title">QQ号查询</h3>
        <Input />
        <Info
          containerStyle={{marginTop: "10px"}}
          qlogo={userInfo.qlogo}
          name={userInfo.name}
          qq={userInfo.qq}
        />
        <Message />
      </div>
    </CTX.Provider>
  );
}

export default App;
