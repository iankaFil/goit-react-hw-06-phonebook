import React from 'react';
import css from './Filter.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filter-slice';
import { getFilter } from 'redux/filter/filter-selectors';

const Filter = () => {
  const onSetFilter = payload => {
    dispatch(setFilter(payload));
  };

  const updateFilter = event => {
    onSetFilter(event.target.value);
  };

  const dispatch = useDispatch();

  const filter = useSelector(getFilter);

  return (
    <div className={css.searchWrapper}>
      <label className={css.label} htmlFor="filter">
        Find contacts by name:
      </label>
      <input
        className={css.input}
        type="text"
        name="filter"
        onChange={updateFilter}
        value={filter}
      />
    </div>
  );
};

export default Filter;
