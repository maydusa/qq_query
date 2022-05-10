import React, { useCallback, useContext, useEffect, useMemo, useRef } from 'react';
import './Message.css';
import { MessageType } from '../../types';
import SuccessIcon from '../../images/success.png';
import FailIcon from '../../images/fail.png';
import LoadingIcon from '../../images/loading.png';

import { CTX } from '../../context';

const ICON_MAP = {
  [MessageType.SUCCESS]: SuccessIcon,
  [MessageType.FAIL]: FailIcon,
  [MessageType.LOADING]: LoadingIcon
}

function Message() {
  const { message, setMessage } = useContext(CTX);
  const { isShow = false, type = MessageType.SUCCESS, text = '', duration = 3000 } = message;
  const timer = useRef<number | null>(null);

  const unmount = useCallback(() => {
    if (timer) clearTimeout(timer.current as number);
  }, []);

  useEffect(() => {
    unmount();
    if (duration === 0) return;
    setTimeout(() => {
      setMessage({
        ...message,
        isShow: false
      });

      return () => {
        unmount();
      };
    }, duration);
  }, [isShow, type, text, duration]);

  return isShow ? (
    <div className={`message-container message-container-${type}`}>
      <img className="message-icon" src={ICON_MAP[type]} />
      <span className="message-text">{text}</span>
    </div>
  ) : null;
}

export default Message;