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
    <React.Fragment>
      <Component
        {...input}
        {...props}
      />
      {
        (error && touched) ? <span>{ error }</span> : null
      }
    </React.Fragment>
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
