//Написать функцию, которая принимает на входе любое число (но не больше 1 000), определяет, является ли оно простым, 
//и выводит простое число или нет. Если введено больше 1 000, то выводится сообщение, что данные неверны. 
//Обратите внимание на числа 0 и 1.

function typeNumber(tn){
    if (isNaN(tn)) {
        console.log('Упс, кажется, вы ошиблись')
    } else if (tn > 1000) {
        console.log('Данные неверны!')
    } else if (tn === 0) {
        console.log('0')
    } else if (tn % 1 === 0) {
        console.log('Простое!')
    } else 
        {console.log('Непростое!')
    }
    }
    
    typeNumber(1) //пример