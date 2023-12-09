// Задание 1

function findMinimum() {
  var a = parseFloat(document.getElementById("a").value);
  var b = parseFloat(document.getElementById("b").value);
  var c = parseFloat(document.getElementById("c").value);

  var minimum = a;
  if (b < minimum) {
    minimum = b;
  }
  if (c < minimum) {
    minimum = c;
  }

  document.getElementById("resultFindMinimum").innerHTML = "Наименьшее число:" + minimum;
}

// Задание 2

document.getElementById('triangleForm').addEventListener('submit', function (event) {
  event.preventDefault();

  // Получаем координаты точек треугольника
  var x1 = parseFloat(document.getElementById('x1').value);
  var y1 = parseFloat(document.getElementById('y1').value);
  var x2 = parseFloat(document.getElementById('x2').value);
  var y2 = parseFloat(document.getElementById('y2').value);
  var x3 = parseFloat(document.getElementById('x3').value);
  var y3 = parseFloat(document.getElementById('y3').value);

  // Вычисление длин сторон треугольника
  var sideAB = calculateDistance(x1, y1, x2, y2);
  var sideBC = calculateDistance(x2, y2, x3, y3);
  var sideCA = calculateDistance(x3, y3, x1, y1);

  // Вычисление площади треугольника
  var area = calculateArea(sideAB, sideBC, sideCA);

  // Вычисление периметра треугольника
  var perimeter = calculatePerimeter(sideAB, sideBC, sideCA);

  // Вывод результатов на страницу
  document.getElementById('sideAB').textContent = sideAB.toFixed(2);
  document.getElementById('sideBC').textContent = sideBC.toFixed(2);
  document.getElementById('sideCA').textContent = sideCA.toFixed(2);
  document.getElementById('area').textContent = area.toFixed(2);
  document.getElementById('perimeter').textContent = perimeter.toFixed(2);

  document.getElementById('resultTriangle').style.display = 'block';
});

// Функция вычисления длины отрезка по координатам
function calculateDistance(x1, y1, x2, y2) {
  var dx = x2 - x1;
  var dy = y2 - y1;
  return Math.sqrt(dx * dx + dy * dy);
}

// Функция вычисления площади треугольника по длинам сторон
function calculateArea(sideAB, sideBC, sideCA) {
  var p = (sideAB + sideBC + sideCA) / 2; // Полупериметр
  return Math.sqrt(p * (p - sideAB) * (p - sideBC) * (p - sideCA));
}

// Функция вычисления периметра треугольника по длинам сторон
function calculatePerimeter(sideAB, sideBC, sideCA) {
  return sideAB + sideBC + sideCA;
}

// 3
function calculateExpression1(a, b, c) {
  const numerator = b + Math.sqrt(Math.pow(b, 2) + 4 * a * c);
  const denominator = 2 * a;
  const expression = numerator / denominator - Math.pow(a, 3) * c + Math.pow(b, -2);
  return expression;
}

function calculateExpression2(a, b, c, d) {
  const numerator = (a / b) * (b / d) - (a * b - c) / (c * d);
  return numerator;
}

function calculateExpression3(x, y) {
  const numerator = (Math.sin(x) + Math.cos(y)) * Math.tan(x * y);
  const denominator = Math.cos(x) - Math.sin(y);
  const expression = numerator / denominator;
  return expression;
}

function calculateExpression4(x, y) {
  const numerator = (x + y) / (y + 1) - (x * y - 12) / (34 + x);
  return numerator;
}

function calculateAndDisplay() {
  var a = parseFloat(document.getElementById("aaa").value);
  var b = parseFloat(document.getElementById("bbb").value);
  var c = parseFloat(document.getElementById("ccc").value);
  var d = parseFloat(document.getElementById("ddd").value);
  var x = parseFloat(document.getElementById("xxx").value);
  var y = parseFloat(document.getElementById("yyy").value);

  var result1 = calculateExpression1(a, b, c);
  var result2 = calculateExpression2(a, b, c, d);
  var result3 = calculateExpression3(x, y);
  var result4 = calculateExpression4(x, y);

  document.getElementById("result1").innerHTML = "Результат выражения 1: " + result1;
  document.getElementById("result2").innerHTML = "Результат выражения 2: " + result2;
  document.getElementById("result3").innerHTML = "Результат выражения 3: " + result3;
  document.getElementById("result4").innerHTML = "Результат выражения 4: " + result4;
}


// 4 Задание
function getWordsList() {
  var words = prompt("Введите двадцать слов через пробел").split(" ");
  var output = document.getElementById("output");

  // Вывод исходного списка
  output.innerHTML += "<h2>Исходный список:</h2>";
  words.forEach(function (word) {
    output.innerHTML += word + "<br>";
  });

  // Вывод обратного списка
  output.innerHTML += "<h2>Обратный список:</h2>";
  words.reverse().forEach(function (word) {
    output.innerHTML += word + "<br>";
  });

  // Вывод отсортированного списка
  output.innerHTML += "<h2>Отсортированный список:</h2>";
  words.sort().forEach(function (word) {
    output.innerHTML += word + "<br>";
  });

  // Вывод слов, начинающихся с гласной буквы
  output.innerHTML += "<h2>Слова, начинающиеся с гласной буквы:</h2>";
  words.forEach(function (word) {
    if (/^[aeiouаеёиоуыэюя]/i.test(word)) {
      output.innerHTML += "<span class='bold'>" + word + "</span><br>";
    }
  });

  // Вывод слов, начинающихся с согласной буквы
  output.innerHTML += "<h2>Слова, начинающиеся с согласной буквы:</h2>";
  var consonantWords = words.filter(function (word) {
    return !/^[aeiouаеёиоуыэюя]/i.test(word);
  });
  consonantWords.forEach(function (word) {
    output.innerHTML += word + "<br>";
  });
}

// 5 Задание
var quest = document.getElementById("quest");

quest.addEventListener("click", function () {

  var questions = [
    "Ваше имя?",
    "Ваша фамилия?",
    "Ваше отчество?",

    "Какое у вас любимое животное?",
    "У вас есть братья/сестры?",
    "Какой у вас любимый цвет?",
    "Какой у вас любимый фильм?",
    "Какой у вас любимый Сериал?",
    "Какой у вас рост?",
    "Какое любимое число?",
  ];

  // Функция для получения текущей даты и времени
  function getCurrentDateTime() {
    var now = new Date();
    var date = now.toLocaleDateString();
    var time = now.toLocaleTimeString();
    return date + " " + time;
  }

  // Функция для получения возраста
  function getAge(birthDate) {
    var now = new Date();
    var diff = now - birthDate;
    var ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  // Запрос данных анкетируемого
  var answers = [];
  for (var i = 0; i < questions.length; i++) {
    var answer = prompt(questions[i]);
    answers.push(answer);
  }

  // Получение имени, фамилии и отчества
  var firstName = answers[0];
  var lastName = answers[1];
  var patronymic = answers[2];

  var pets = answers[3];
  var siblings = answers[4];
  var color = answers[5];
  var film = answers[6];
  var serial = answers[7];
  var height = answers[8];
  var number = answers[9];


  // ИП в РП
  function toCase(str, choice) {
    var strPub = { // правила для окончаний
      "а": ["ы", "е", "у", "ой", "е"],
      "(ш/ж/к/ч)а": ["%и", "%е", "%у", "%ой", "%е"],
      "б/в/м/г/д/л/ж/з/к/н/п/т/ф/ч/ц/щ/р/х": ["%а", "%у", "%а", "%ом", "%е"],
      "и": ["ей", "ям", "%", "ями", "ях"],
      "ый": ["ого", "ому", "%", "ым", "ом"],
      "й": ["я", "ю", "я", "ем", "е"],
      "о": ["а", "у", "%", "ом", "е"],
      "с/ш": ["%а", "%у", "%", "%ом", "%е"],
      "ы": ["ов", "ам", "%", "ами", "ах"],
      "ь": ["я", "ю", "я", "ем", "е"],
      "уль": ["ули", "уле", "улю", "улей", "уле"],
      "(ч/ш/д/т)ь": ["%и", "%и", "%ь", "%ью", "%и"],
      "я": ["и", "е", "ю", "ей", "е"]
    },
      cases = { // номера для падежей, не считая Именительный
        "р": 0,
        "д": 1,
        "в": 2,
        "т": 3,
        "п": 4
      },
      exs = { // исключения, сколько символов забирать с конца
        "ц": 2,
        "ок": 2
      },
      lastIndex, reformedStr, forLong, splitted, groupped, forPseudo;
    for (var i in strPub) {
      if (i.length > 1 && str.slice(-i.length) == i) { // для окончаний, длиной >1
        lastIndex = i;
        reformedStr = str.slice(0, -lastIndex.length);
        break;
      }
      else if (/[\(\)]+/g.test(i)) { // фича: группировка окончаний
        i.replace(/\(([^\(\)]+)\)([^\(\)]+)?/g, function (a, b, c) {
          splitted = b.split("/");
          for (var o = 0; o < splitted.length; o++) {
            groupped = splitted[o] + c;
            strPub[groupped] = strPub[i];
            if (str.slice(-groupped.length) == groupped) {
              for (var x = 0, eachSplited = strPub[groupped]; x < eachSplited.length; x++) {
                eachSplited[x] = eachSplited[x].replace("%", splitted[o]);
              }
              reformedStr = str.slice(0, -groupped.length);
              forPseudo = groupped;
            }
          }
        })
      }
      else { // дефолт
        lastIndex = str.slice(-1);
        reformedStr = str.slice(0, -(forPseudo || lastIndex).length);
      }
      if (/\//.test(i) && !(/[\(\)]+/g.test(i)) && new RegExp(lastIndex).test(i)) forLong = i; // группированные окончания, разделающиеся слешем
      for (var o in exs) { // поиск исключений
        if (str.slice(-o.length) == o) reformedStr = str.slice(0, -exs[o]);
      }
    }
    return reformedStr + strPub[(forPseudo || forLong || lastIndex)][cases[choice]].replace("%", lastIndex)
  }

  // Получение возраста
  var birthYear = prompt("Год рождения?");
  var age = getAge(new Date(birthYear));

  // Вывод анкетных данных на страницу
  var table = document.createElement("table");
  var tbody = document.createElement("tbody");

  // Заголовок таблицы
  var headerRow = document.createElement("tr");
  var headerCell = document.createElement("th");
  headerCell.textContent = "Анкета " + toCase(lastName, "р") + " " + toCase(firstName, "р") + " " + toCase(patronymic, "р");
  headerCell.colSpan = 2;
  headerRow.appendChild(headerCell);
  tbody.appendChild(headerRow);

  // Данные анкеты
  var dataRows = [
    ["Имя", firstName],
    ["Фамилия", lastName],
    ["Отчество", patronymic],
    ["Дата и время анкетирования", getCurrentDateTime()],
    ["Возраст", age],
    ["Любимое животное", pets],
    ["Братья/сестры", siblings],
    ["Любимый цвет", color],
    ["Любимый фильм", film],
    ["Любимый сериал", serial],
    ["Рост", height],
    ["Любимое число", number]
  ];

  for (var j = 0; j < dataRows.length; j++) {
    var row = document.createElement("tr");
    var labelCell = document.createElement("td");
    var valueCell = document.createElement("td");

    labelCell.textContent = dataRows[j][0];
    valueCell.textContent = dataRows[j][1];

    row.appendChild(labelCell);
    row.appendChild(valueCell);
    tbody.appendChild(row);
  }

  table.appendChild(tbody);
  document.body.appendChild(table);
  quest.remove();
});

