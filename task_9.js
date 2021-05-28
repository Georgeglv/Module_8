//Ранее в юните «Циклы» вы выполняли следующее задание: 7
//На этот раз оформите решение в виде функции, постарайтесь дать этой функции корректное название, 
//вызовите функцию, проанализируйте синтаксис.

function getNumProperty(s){
    let evenNums = 0;
    let oddNums = 0;
    let nullNums = 0;
    for (let i = 0; i<s.length; i++) {
      if (isNaN([s[i]])) {
          nullNums++;
        } else if ([s[i]] === null) {
              nullNums++;
        } else if ([s[i]] === 0) {
              nullNums++;
        } else if ([s[i]] % 2 === 0) {
              evenNums++;
            } else
              {oddNums++
    }
    }
    console.log('Четные: ' + evenNums);
    console.log('Нечетные: ' + oddNums);
    console.log('Другое: ' + nullNums);
    }
    
let lostNums = [4, 8, 15, 16, 23, 4, 42, 78, null, 0, NaN];

console.log(getNumProperty(lostNums))
