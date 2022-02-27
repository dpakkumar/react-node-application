import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './Table.scss';

const Table = ({ headers, entries, className, keyNames }) => {
  return (
    <table className={classnames('default-table', className)}>
      <thead>
        <tr>
          {
            headers.map((header, key) => (
              <th key={key}>{header}</th>
            ))
          }
        </tr>
      </thead>

      <tbody>
        {
          entries.map((entry, key) => (
            <tr key={key}>
              <td>{key + 1}</td>
              {
                keyNames.map((entryKey, key) => (
                  <td key={key}>{entryKey.includes('Date') ? entry[entryKey].split('T')[0] : entry[entryKey]}</td>
                ))
              }
            </tr>
          ))
        }
      </tbody>
    </table>
  );
};

export default Table;

Table.propTypes = {
  className: PropTypes.string,
  entries: PropTypes.array,
  headers: PropTypes.array,
  keyNames: PropTypes.array,
};

Table.defaultProps = {
  className: undefined,
  entries: [],
  headers: [],
  keyNames: [],
};

