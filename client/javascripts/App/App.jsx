import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '../components/Button';
import Table from '../components/Table';
import useModal from '../customHooks/useModal';
import AddUserModal from '../components/AddUserModal';
import RemoveUser from '../components/RemoveUser';
import './App.scss';

const tableHeaders = ['S. No', 'User Id', 'Name', 'Email', 'Joining Date'];

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(async () => {
    const users = await axios.get('/users');
    setUsers(users.data);
  }, []);

  const { openModal: openAddModal, RenderModal: RenderAddModal } = useModal();
  const { openModal: openRemoveModal, RenderModal: RenderRemoveModal } = useModal();

  return (
    <div className='user-table'>
      <div className='add-and-remove-user'>
        <Button className='add-user' onClick={openAddModal}>
          Add User
        </Button>
        <Button className='remove-user' onClick={openRemoveModal}>
          Remove User
        </Button>
      </div>

      <Table
        headers={tableHeaders}
        entries={users}
        keyNames={['userId', 'userName', 'email', 'joiningDate']}
      />

      {RenderAddModal(AddUserModal)}
      {RenderRemoveModal(RemoveUser)}
    </div>
  );
};

export default App;