import { StyledFilter } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, getFilter } from 'redux/filterSlice';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <StyledFilter
      placeholder="filter here"
      type="text"
      value={filter}
      onChange={event => dispatch(changeFilter(event.target.value))}
    />
  );
};
