import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { isPlainObject } from 'lodash';
import wrapField from './FieldWrapper';


const onSelectChange = onChange => (e) => {
  const nextVal = isPlainObject(e) ? e.value : e;

  onChange(nextVal);
};

const SelectWrapper = (props) => {
  const allOptions = props.allOptions || props.options;

  return (
    <Select
      {...props}
      placeholder="Select"
      value={allOptions.find(({ value }) => value === props.value)}
      onChange={onSelectChange(props.onChange)}
      onBlur={() => props.onBlur(props.value)}
    />
  );
};

SelectWrapper.propTypes = {
  onBlur: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.oneOfType([PropTypes.object, PropTypes.arrayOf(PropTypes.object)]).isRequired,
};


export default wrapField(SelectWrapper);
