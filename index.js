// Испытания. Javascript: Фасад

import cube from './numbers1.js';

export default cube;
export {
  default as multi,
  pow2 as pow,
  sum2 as sum,
  sub2 as sub,
} from './numbers2.js';
export { default as sqrt } from './numbers3.js';
