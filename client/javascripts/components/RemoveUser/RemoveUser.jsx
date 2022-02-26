import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Button from '../Button';
import './RemoveUser.scss';

const RemoveUser = ({setUsers, closeModal}) => {
  const [userId, setUserId] = useState();

  const handleDelete = () => {
    axios.delete(`/users/${userId}`)
      .then(() => {
        setUsers(prevUsers => {
          return prevUsers.filter(user => user.userId !== userId);
        });
      })
      .catch(console.log)
      .finally(closeModal);
  };

  return (
    <form className='remove-user-modal'>
      <label htmlFor='userr-id'>User Id</label>
      <input id='user-id' value={userId} onChange={(e) => setUserId(e.target.value)} />
      <Button onClick={handleDelete}>
        Submit
      </Button>
    </form>
  );
};

export default RemoveUser;

RemoveUser.defaultProps = {
  setUsers: () => {},
  closeModal: () => {},
};

RemoveUser.propTypes = {
  setUsers: PropTypes.func,
  closeModal: PropTypes.func,
};