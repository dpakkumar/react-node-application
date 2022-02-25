import React, { useState } from 'react';
import Button from '../Button';
import './RemoveUser.scss';

const RemoveUser = () => {
  const [userId, setUserId] = useState();

  return (
    <form class='remove-user-modal'>
      <label for='userr-id'>User Id</label>
      <input id='user-id' value={userId} onChange={(e) => setUserId(e.target.value)} />
      <Button>
        Submit
      </Button>
    </form>
  );
};

export default RemoveUser;