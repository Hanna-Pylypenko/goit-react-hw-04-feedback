import css from './Section.module.css';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <div className={css.sectionContainer}>
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
};
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
