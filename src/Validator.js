import ArraySchema from './ArraySchema.js';
import NumberSchema from './NumberSchema.js';

export default class Validator {
  // eslint-disable-next-line class-methods-use-this
  number() {
    return new NumberSchema();
  }

  // eslint-disable-next-line class-methods-use-this
  array() {
    return new ArraySchema();
  }
}
