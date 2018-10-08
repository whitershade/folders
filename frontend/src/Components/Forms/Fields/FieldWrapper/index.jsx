import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';


const wrapField = (Component) => {
  const field = (
    {
      input,
      meta: { touched, error },
      ...props
    },
  ) => (
    <div className={`${props.className} ${styles.wrapper}`}>
      <Component
        {...input}
        {...props}
        error={!!((error && touched))}
      />
      { (error && touched) ? (
        <span className={styles.error}>
          { error }
        </span>
      ) : null }
    </div>
  );

  field.propTypes = {
    input: PropTypes.shape({
      onChange: PropTypes.func.isRequired,
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
        PropTypes.arrayOf(PropTypes.object),
        PropTypes.bool,
      ]).isRequired,
    }).isRequired,
    meta: PropTypes.object.isRequired,
  };

  return field;
};


export default wrapField;
