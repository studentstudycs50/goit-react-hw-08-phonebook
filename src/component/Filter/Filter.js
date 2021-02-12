import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterStyled from '../Filter/FilterStyled';

import { getFilter } from "../../redux/selectors/formSelectors";
import { setFilter } from "../../redux/actions/formActions";

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter)

  const onChangeFilter = event => {
    const { value } = event.target;
    dispatch(setFilter(value))
  }

  return (
      <FilterStyled>
        <label className="filter-title">
          Find contact by name
          <input type="text" name="filter" value={filter}  placeholder="Start writing name" onChange={onChangeFilter} className="filter-input"
          />
        </label>
    </FilterStyled>
  );
};



export default Filter;