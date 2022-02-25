import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './Table.scss';

const Table = ({ headers, entries, className, keyNames }) => {
  console.log(entries);
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
                keyNames.map(entryKey => (
                  <td>{entry[entryKey]}</td>
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
  KeyNames: PropTypes.arraym
};

Table.defaultProps = {
  className: undefined,
  entries: [],
  headers: [],
  KeyNames: [],
};

