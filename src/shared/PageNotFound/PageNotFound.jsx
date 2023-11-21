import PropTypes from 'prop-types';
import styles from './PageNotFound.module.scss';

const PageNotFound = ({ className = '' }) => {
  return <div className={`${styles.root} ${className}`}>404 - PAGE NOT FOUND</div>;
};

PageNotFound.propTypes = {
  className: PropTypes.string,
};

export default PageNotFound;
