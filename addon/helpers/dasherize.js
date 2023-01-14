import { helper } from '@ember/component/helper';
import { dasherize } from '@ember/string';

export default helper(function dasherizeHelper([string]) {
  return dasherize(string);
});
