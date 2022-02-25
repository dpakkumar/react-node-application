import React, {useState} from 'react';
import Button from '../Button';
import './AddUserModal.scss';

const AddUserModal = () => {
  const [user, setUser] = useState({});

  const handleChange = (key) => (event) => {
    setUser( prevValue => ({
      ...prevValue,
      key: event.target.value,
    }));
  };

  return (
    <div className='add-user-modal'>
      <form>
        <label for='user-name'>User Name</label>
        <input id='user-name' onChange={handleChange('name')} value={user.name} />
        <label for='e-mail'>Email</label>
        <input id='e-mail' onChange={handleChange('email')} value={user.email} />
        <label for='address'>Address</label>
        <input id='address' onChange={handleChange('address')} value={user.address} />
        <label for='date'>Joining Date</label>
        <input id='date' onChange={handleChange('joiningDate')} value={user.joiningDate} />
        <Button>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddUserModal;