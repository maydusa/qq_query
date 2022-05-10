import React, { useEffect, useState } from 'react';
import './Info.css';
import UserIcon from '../../images/user.png';

import { InfoProps } from'./types';

function Info(props: InfoProps) {

  const { containerStyle = {}, qlogo = '', name = '', qq = '' } = props;

  const [avatarUrl, setAvatarUrl] = useState(qlogo || UserIcon);

  const handleLoadAvatarError = () => {
    setAvatarUrl(UserIcon);
  }

  useEffect(() => {
    setAvatarUrl(qlogo);
  }, [qlogo]);

  return (
    <div style={containerStyle}>
      <div className="info-card">
        <img data-testid="avatar" className="info-avatar" src={avatarUrl} onError={handleLoadAvatarError} />
        <div className="info-texts">
          <p data-testid="nickname" className="info-nickname">{name}</p>
          <p data-testid="qq" className="info-qq">{qq}</p>
        </div>
      </div>
    </div>
  );
}

export default Info;