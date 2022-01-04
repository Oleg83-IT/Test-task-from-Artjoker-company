function evaluatePromocode (num1, num2, num3, num4, num5, num6, num7, num8) {
  const code = Array.from(arguments);

  if (code.length !== 8) {
    alert('You should pass eight arguments');
    return;
  };

  for (i = 0; i < code.length; i++) {
    if (typeof code[i] !== 'number' 
        || code[i] < 0 
        || code[i] > 9 
        || Number.isInteger(code[i]) !== true) {
      alert('Passed arguments must be integers from 0 to 9 inclusive');
      return;
    };
  };

  let oddPairs = 0;
  let ascendingOrder = 0;

  for(i = 0; i < code.length - 1; i++) {
    if (code[i] * code[i + 1] % 2 !== 0 
        && (code[i + 2] % 2 === 0 || code[i + 2] === undefined)) {
          oddPairs++;
          if (code[i + 1] > code[i]) {
            ascendingOrder++;
          };
    };
  };

  if (oddPairs < 2) {  
    const even = code.filter(item => item % 2 === 0);
    const odd = code.filter(item => item % 2 !== 0);

    let sumEven = 0;
    for (i = 0; i < even.length; i++) {
       sumEven += even[i]
    };

    let sumOdd = 0;
    for (i = 0; i < odd.length; i++) {
       sumOdd += odd[i]
    };

    if (sumEven > sumOdd) return 100;
    if (sumEven === sumOdd) return 10;
    return 0;
  };

  if (oddPairs > ascendingOrder) return 1000;
  return 2000;
};