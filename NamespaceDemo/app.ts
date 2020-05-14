/// <reference path="utility-functions.ts"/>

let result = Utility.maxBooksAllowed(13);
console.log('result:', result);

import util = Utility.Fees;

result = util.calculateLateFee(30);
console.log('result:', result);
