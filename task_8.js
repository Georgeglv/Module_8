//Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».
//Используйте шаблонные строки.

let heroSkills = new Map();
heroSkills.set ('superman', 'superpower');
heroSkills.set ('ironman', 'armor');
heroSkills.set ('batman', 'money');

for (let name of heroSkills.keys()) {
  console.log(name);
}

heroSkills.forEach(function(value, key) {
  console.log('Имя героя: ' + `${key} Суперспособность: ${value}`);
})