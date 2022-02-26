import React, {useState} from 'react';
import Button from '../Button';
import axios from 'axios';
import PropTypes from 'prop-types';
import './AddUserModal.scss';

const AddUserModal = ({setUsers, closeModal}) => {
  const [user, setUser] = useState({});

  const handleChange = (key) => (event) => {
    setUser(prevValue => ({
      ...prevValue,
      [key]: event.target.value,
    }));
  };

  const handleSubmit = () => {
    let { userId, userName, email, address } = user;
    user.joiningDate = '';
    const options = {
      userId, userName, email, address
    };
    
    axios.post('/users', options)
      .then((res) => {
        setUsers(prevData => [ ...prevData, res.data ]);
      })
      .catch(console.log)
      .finally(closeModal);
  };

  return (
    <div className='add-user-modal'>
      <form>
        <label htmlFor='user-id'>User Id</label>
        <input id='user-id' onChange={handleChange('userId')} value={user.name} />
        <label htmlFor='user-name'>User Name</label>
        <input id='user-name' onChange={handleChange('userName')} value={user.name} />
        <label htmlFor='e-mail'>Email</label>
        <input id='e-mail' onChange={handleChange('email')} value={user.email} />
        <label htmlFor='address'>Address</label>
        <input id='address' onChange={handleChange('address')} value={user.address} />
        <Button onClick={handleSubmit}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddUserModal;

AddUserModal.defaultProps = {
  setUsers: () => {},
  closeModal: () => {},
};

AddUserModal.propTypes = {
  setUsers: PropTypes.func,
  closeModal: PropTypes.func,
}