import { StyledFilter } from './Filter.styled'

export const Filter = ({ contactFilter, onChange }) => {
   return (
      <StyledFilter
         placeholder='filter here'
         type="text"
         value={contactFilter}
         onChange={event => onChange(event.target.value)}
      />
   );
};