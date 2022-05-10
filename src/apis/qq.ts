import axios from 'axios';
import { UserInfo } from '../types';
import { fetchQQParams } from './types';

const fetchQQInfo = (params: fetchQQParams): Promise<UserInfo> => {
  const { qq } = params;
  return new Promise((resolve, reject) => {
    axios.get(`https://api.uomg.com/api/qq.info?qq=${qq}`)
      .then(res => {
        console.log(res)
        if (res.data.code === 1) {
          const { name, qlogo, qq } = res.data;
          resolve({
            name,
            qlogo,
            qq: Number(qq)
          });
        } else {
          reject(res.data);
        }
      })
      .catch(err => reject(err));
  });
}

export {
  fetchQQInfo
}