import React, { useState, useMemo } from 'react';
import Button from '../components/Button';
import Table from '../components/Table';
import './App.scss';

const tableHeaders = ['S. No', 'User Id', 'Name', 'Email', 'Joining Date'];

const App = () => {
  const [users, setUsers] = useState([
    {
      id: 'test',
      name: 'TEST',
      email: 'test@testmail.com',
      joiningDate: 'date',
    }
  ]);

  return (
    <div className='user-table'>
      <div className='add-and-remove-user'>
        <Button className='add-user'>
          Add User
        </Button>
        <Button className='remove-user'>
          Remove User
        </Button>
      </div>

      <Table
        headers={tableHeaders}
        entries={users}
      />
    </div>
  );
};

export default App;