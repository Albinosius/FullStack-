// Задание 1
function calculate() {
  var angle = parseFloat(document.getElementById("angle").value);
  var func = document.getElementById("function").value;

  if (angle < 0 || angle > 90) {
    document.getElementById("resultCalculate").innerHTML = "Значение должно принадлежать диапазону [0,90]";
    return;
  }

  var result;

  switch (func) {
    case "sin":
      result = Math.sin(angle * Math.PI / 180);
      break;
    case "cos":
      result = Math.cos(angle * Math.PI / 180);
      break;
    case "tan":
      result = Math.tan(angle * Math.PI / 180);
      break;
    case "cot":
      result = 1 / Math.tan(angle * Math.PI / 180);
      break;
    default:
      result = "Некорректная функция";
  }

  document.getElementById("resultCalculate").innerHTML = "Результат: " + result;
}

// Задание 2
function submitForm() {
  var fio = document.getElementById("fio").value;
  var dob = new Date(document.getElementById("dob").value);
  var gender = document.getElementById("gender").value;
  var faculty = document.getElementById("faculty").value;
  var major = document.getElementById("major").value;
  var course = document.getElementById("course").value;
  var hobby = document.getElementById("hobby").value;
  var programmingLanguage = document.getElementById("programmingLanguage").value;
  var musicalInstrument = document.getElementById("musicalInstrument").value;
  var sports = document.getElementById("sports").value;
  var favoriteColor = document.getElementById("favoriteColor").value;

  var today = new Date();
  var age = today.getFullYear() - dob.getFullYear();
  var monthDiff = today.getMonth() - dob.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
    age--;
  }

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
  let fullNameArray = fio.split(" ");
  let lastName = fullNameArray[0];
  let firstName = fullNameArray[1];
  let patronymic = fullNameArray[2];

  var tableName = document.getElementById("tableName");
  tableName.textContent = "Таблица " + toCase(lastName, "р") + " " + toCase(firstName, "р") + " " + toCase(patronymic, "р");

  var table = document.getElementById("anketaTable");
  table.style.color = favoriteColor;
  var row = table.insertRow(-1);
  row.innerHTML = "<td>" + fio + "</td><td>" + age + "</td><td>" + new Date().toLocaleString() + "</td><td>" + gender + "</td><td>" + faculty + "</td><td>" + major + "</td><td>" + course + "</td><td>" + hobby + "</td><td>" + programmingLanguage + "</td><td>" + musicalInstrument + "</td><td>" + sports + "</td>";
}