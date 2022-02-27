import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '../components/Button';
import Table from '../components/Table';
import useModal from '../customHooks/useModal';
import AddUserModal from '../components/AddUserModal';
import RemoveUser from '../components/RemoveUser';
import './App.scss';

const tableHeaders = ['S. No', 'User Id', 'Name', 'Email', 'Joining Date'];
const entryKeyNames = ['userId', 'userName', 'email', 'joiningDate'];

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await axios.get('/users');
      setUsers(users.data);
    };

    fetchUsers();
  }, []);


  const { openModal: openAddModal, RenderModal: RenderAddModal } = useModal({users, setUsers});
  const { openModal: openRemoveModal, RenderModal: RenderRemoveModal } = useModal({setUsers});

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
        keyNames={entryKeyNames}
      />

      {RenderAddModal(AddUserModal)}
      {RenderRemoveModal(RemoveUser)}
    </div>
  );
};

export default App;