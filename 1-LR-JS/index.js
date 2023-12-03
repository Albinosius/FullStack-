// Задание 1
var day = document.getElementById("day");

day.addEventListener("click", function () {
  let russianDay = prompt("Введите день недели на русском языке:");

  let englishDay;

  switch (russianDay.toLowerCase()) {
    case "понедельник":
      englishDay = "Monday";
      break;
    case "вторник":
      englishDay = "Tuesday";
      break;
    case "среда":
      englishDay = "Wednesday";
      break;
    case "четверг":
      englishDay = "Thursday";
      break;
    case "пятница":
      englishDay = "Friday";
      break;
    case "суббота":
      englishDay = "Saturday";
      break;
    case "воскресенье":
      englishDay = "Sunday";
      break;
    default:
      englishDay = "Некорректный день недели";
      break;
  }

  alert("День недели на английском: " + englishDay);
});

// Задание 2
var arithmetic = document.getElementById("arithmetic");

arithmetic.addEventListener("click", function () {
  function generateQuestion() {
    var num1 = Math.floor(Math.random() * 10) + 1;
    var num2 = Math.floor(Math.random() * 10) + 1;
    var operator = Math.random() < 0.5 ? '+' : '-';

    var question = num1 + ' ' + operator + ' ' + num2;

    return question;
  }

  function checkAnswer(answer, quest) {
    var result;

    console.log("CHACKquest:", quest);
    var correctAnswer = eval(quest); 
    console.log("correctAnswer:", correctAnswer);

    if (Number(answer) === correctAnswer && answer !== '') {
      result = true;
    } else {
      result = false;
    }

    return result;
  }

  var score = 0;

  for (var i = 0; i < 10; i++) {
    var quest = generateQuestion();
    
    console.log("FORquest:", quest);
    var userAnswer = prompt('Вопрос ' + (i + 1) + ': ' + quest);
    console.log("userAnswer:", userAnswer);

    if (checkAnswer(userAnswer, quest)) {
      score += 0.5;
    }
  }

  var grade;

  if (score >= 5) {
    grade = 'Отлично!';
  } else if (score >= 4) {
    grade = 'Хорошо!';
  } else if (score >= 3) {
    grade = 'Удовлетворительно!';
  } else {
    grade = 'Неудовлетворительно!';
  }

  score = Math.floor(score);

  alert('Ваш результат: ' + score + ' баллов. ' + grade);
});

// Задание 3
function calculateFactorial() {
  var number = parseInt(document.getElementById("number").value);
  var factorial = 1;

  for (var i = 1; i <= number; i++) {
    factorial *= i;
  }

  document.getElementById("resultFact").innerHTML = "Факториал числа " + number + " равен " + factorial + ".";
}

// Задание 4
function calculateSum() {
  var number = document.getElementById("numberInput").value;
  
  if (number.length !== 3) {
      alert("Пожалуйста, введите трехзначное число!");
      return;
  }
  
  var sum = 0;
  for (var i = 0; i < number.length; i++) {
      sum += parseInt(number.charAt(i));
  }
  
  document.getElementById("resultSum").textContent = "Сумма цифр числа: " + sum;
}

// Задание 5
function convertToDecimalTwo() {
  var binaryNumber = document.getElementById("binaryNumber").value;
  var decimalNumber = parseInt(binaryNumber, 2);
  document.getElementById("resultСonv").innerHTML = "Десятичное число: " + decimalNumber;
}

function convertToDecimalSix() {
  var hexNumber = document.getElementById("hexNumber").value;
  var decimalNumber = parseInt(hexNumber, 16);
  document.getElementById("result").innerHTML = "Десятичное число: " + decimalNumber;
}