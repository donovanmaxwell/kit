import './index.css';

import numeral from 'numeral';

const devValue = numeral(1000).format('$0,0.00');
console.log(`I would pay ${devValue} for this awesome starter kit!`); // eslint-disable-line no-console