let array: (string | boolean | number)[] = [];
array[0] = 'str';
array[1] = true;
array[2] = 'false';
array[array.length] = 12321;

console.log(array);
