import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { isPlainObject } from 'lodash';
import wrapField from './FieldWrapper';

const customStyles = error => ({
  control: styles => ({
    ...styles,
    borderColor: error ? 'red' : styles.borderColor,
    ':hover': {
      borderColor: error ? 'red' : styles.borderColor,
    },
  }),
});

const onSelectChange = onChange => (e) => {
  const nextVal = isPlainObject(e) ? e.value : e;

  onChange(nextVal);
};

const SelectWrapper = (props) => {
  const allOptions = props.allOptions || props.options;

  return (
    <Select
      {...props}
      isSearchable={false}
      placeholder="Select"
      styles={customStyles(props.error)}
      value={allOptions.find(({ value }) => value === props.value) || null}
      onChange={onSelectChange(props.onChange)}
      onBlur={() => props.onBlur(props.value)}
    />
  );
};

SelectWrapper.propTypes = {
  error: PropTypes.bool.isRequired,
  onBlur: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.oneOfType([PropTypes.object, PropTypes.arrayOf(PropTypes.object)]).isRequired,
};


export default wrapField(SelectWrapper);
