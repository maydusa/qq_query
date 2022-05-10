import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import './Input.css';
import useDebounce from '../../hooks/useDebounce';
import { fetchQQInfo } from '../../apis/qq';
import { UserInfo } from '../../types';
import { MessageType } from '../../types';
import { CTX } from '../../context';

function Input() {
  const { setUserInfo, setMessage } = useContext(CTX);
  const [value, setValue] = useState('');
  const [isShowTips, setIsShowTips] = useState(false);
  const qq = useDebounce(value, 150);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  const queryQQ = async () => {
    let res: UserInfo = {
      name: '',
      qlogo: '',
      qq: ''
    };

    if (!(/^[1-9][0-9]{4,12}$/.test(qq))) {
      if (!isShowTips) setIsShowTips(true);
      setUserInfo(res);
      return;
    }

    if (isShowTips) setIsShowTips(false);

    try {
      setMessage({
        isShow: true,
        type: MessageType.LOADING,
        text: '请求中···',
        duration: 0
      });
      res = await fetchQQInfo({ qq });
      setUserInfo(res);
      setMessage({
        isShow: true,
        type: MessageType.SUCCESS,
        text: '请求成功'
      });
    } catch (e) {
      console.info(e);
      setUserInfo(res);
      setMessage({
        isShow: true,
        type: MessageType.FAIL,
        text: '请求失败'
      });
    }
  }

  useEffect(() => {
    queryQQ();
  }, [qq]);

  return (
    <div>
      <label htmlFor="input">
        QQ
        <input id="input" className="input-qq" data-testid="input" type="text" value={qq} onChange={handleInput} />
      </label>
      {
        isShowTips ?
        <span className="input-tips" data-testid="tips">请输入5-13位有效qq号码</span>
        : null
      }
    </div>
  );
}

export default Input;
