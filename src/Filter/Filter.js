import React from 'react';
import PropTypes from 'prop-types';

import styles from './Filter.module.css';

const Filter = ({ filterValue, filterUpdate }) => {
  return (
    <div>
      <label className={styles.filterLabel}>
        <span className={styles.filterSpan}>Find contacts by name</span>
        <input
          type="text"
          name="filter"
          className={styles.filterInput}
          value={filterValue}
          onChange={filterUpdate}
          autoComplete="off"
          required
        />
      </label>
    </div>
  );
};

Filter.defaultProps = {
  filterValue: '',
};

Filter.propTypes = {
  filterValue: PropTypes.string,
  filterUpdate: PropTypes.func.isRequired,
};

export default Filter;