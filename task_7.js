//Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
//При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.

let lostNums = [4, 8, 15, 16, 23, 4, 42, 78, null, 0, NaN];
let evenNums = 0;
let oddNums = 0;
let nullNums = 0;
for (let i = 0; i<lostNums.length; i++) {
  if (isNaN(lostNums[i])) {
      nullNums++;
    } else if (lostNums[i] === null) {
          nullNums++;
    } else if (lostNums[i] === 0) {
          nullNums++;
    } else if (lostNums[i] % 2 === 0) {
          evenNums++;
        } else
          {oddNums++
}
}
console.log('Четные: ' + evenNums);
console.log('Нечетные: ' + oddNums);
console.log('Другое: ' + nullNums)