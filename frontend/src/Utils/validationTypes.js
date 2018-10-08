import { isString, isEmpty, isArray } from 'lodash';

export const required = value => (
  (
    value === undefined
    || value === null
    || (isArray(value) && isEmpty(value))
    || (isString(value) && value.trim().length === 0)
  ) ? "it's required field" : undefined);
