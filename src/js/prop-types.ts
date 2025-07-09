import PropTypes from 'prop-types';
export const ptClasses = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.arrayOf(PropTypes.string),
  PropTypes.object
]);
export default PropTypes;
