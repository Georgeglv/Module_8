//Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. 
//Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. 
//Проверить, все ли элементы в массиве одинаковые.

function checkDup(s) {
    var map = {};
    for (var i = 0; i < s.length; i++) {
      if (map[s[i]]) return true;
      map[s[i]] = 1;
    }
    return false;
  }
  
  let lostNums = [4, 8, 15, 16, 23, 4, 42];
  console.log(lostNums);
  console.log('есть ли одинаковые значения: ' + checkDup(lostNums))  