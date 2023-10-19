const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

const TIE = 0;
const WIN = 1;
const LOST = 2;

let isPlaying = false;

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const resultText = document.getElementById("start-text");
const userImg = document.getElementById("user-img");
const machineImg = document.getElementById("machine-img");

rockBtn.addEventListener("click", () => {
  play(ROCK);
});
paperBtn.addEventListener("click", () => {
  play(PAPER);
});
scissorsBtn.addEventListener("click", () => {
  play(SCISSORS);
});

function play(userOption) {
  if (isPlaying) return;

  isPlaying = true;

  userImg.src = "img/" + userOption + ".svg";

  resultText.innerHTML = "Good luck!";

  const interval = setInterval(function () {
    const machineOption = calcMachineOption();
    machineImg.src = "img/" + machineOption + ".svg";
  }, 200);

  setTimeout(function () {
    clearInterval(interval);

    const machineOption = calcMachineOption();
    const result = calcResult(userOption, machineOption);

    machineImg.src = "img/" + machineOption + ".svg";

    switch (result) {
      case TIE:
        resultText.innerHTML = "It's a tie!";
        break;
      case WIN:
        resultText.innerHTML = "You won!";
        break;
      case LOST:
        resultText.innerHTML = "You lost!";
        askQuestion();
        break;
    }
    isPlaying = false;
  }, 2000);
}

/*funcion de preguntas aleatorias */
function askQuestion() {
  const preguntas = [
    {
      question: "Who was the first U.S. president?",
      answer: "Washington",
    },
    {
      question: "What is the longest river in the world?",
      answer: "The Nile",
    },

    {
      question: "Who wrote 'Romeo and Juliet'?",
      answer: "William Shakespeare",
    },

    {
      question: "Where were the 2016 Olympics held?",
      answer: "Rio",
    },

    {
      question: "Who painted the 'Mona Lisa'?",
      answer: "Da Vinci",
    },

    {
      question: "What is the chemical symbol for gold?",
      answer: "Au",
    },

    {
      question: "What is the largest planet in the solar system?",
      answer: "Jupiter",
    },

    {
      question: "Who founded Microsoft?",
      answer: "Bill Gates",
    },

    {
      question: "In what year was Google founded?",
      answer: "1998",
    },

    {
      question: "Who is the author of '1984'?",
      answer: "George Orwell",
    },

    {
      question: "What is the largest country in the world?",
      answer: "Russia",
    },

    {
      question: "Who is the president of Russia in 2023?",
      answer: "Vladimir Putin",
    },

    {
      question: "What is the capital of Australia?",
      answer: "Canberra",
    },

    {
      question: "Who wrote 'The Little Prince'?",
      answer: "Antoine de Saint-Exupéry",
    },

    {
      question: "In what year was the U.S. Declaration of Independence signed?",
      answer: "1776",
    },

    {
      question: "What is the most abundant element on Earth?",
      answer: "Oxygen",
    },

    {
      question: "Which city is known as the 'Eternal City'?",
      answer: "Rome",
    },

    {
      question: "What is the largest land animal?",
      answer: "Elephant",
    },

    {
      question: "Who was the first human on the Moon?",
      answer: "Neil Armstrong",
    },

    {
      question: "What is the capital of South Africa?",
      answer: "Pretoria",
    },

    {
      question: "Who wrote 'Don Quixote'?",
      answer: "Miguel de Cervantes",
    },

    {
      question: "In what year was the printing press invented?",
      answer: "1440",
    },

    {
      question: "What is the tallest mountain in the world?",
      answer: "Mount Everest",
    },

    {
      question: "Who is the author of 'Hamlet'?",
      answer: "William Shakespeare",
    },

    {
      question: "What is the most populous country in the world?",
      answer: "China",
    },

    {
      question: "Who painted 'Starry Night'?",
      answer: "Vincent van Gogh",
    },

    {
      question: "What is the lightest metal?",
      answer: "Lithium",
    },

    {
      question: "In what year was America discovered?",
      answer: "1492",
    },

    {
      question: "Who is the author of 'One Hundred Years of Solitude'?",
      answer: "Gabriel García Márquez",
    },

    {
      question: "What is the longest river in Africa?",
      answer: "The Nile",
    },

    {
      question: "Who is the author of 'The Great Gatsby'?",
      answer: "F. Scott Fitzgerald",
    },

    {
      question: "What is the largest ocean in the world?",
      answer: "Pacific Ocean",
    },

    {
      question: "Who wrote 'The Lord of the Rings'?",
      answer: "J.R.R. Tolkien",
    },

    {
      question: "Which country is known as 'the land of the rising sun'?",
      answer: "Japan",
    },

    {
      question: "Who led the Russian Revolution in 1917?",
      answer: "Lenin",
    },

    {
      question: "What is the capital of Canada?",
      answer: "Ottawa",
    },

    {
      question: "Who wrote 'To Kill a Mockingbird'?",
      answer: "Harper Lee",
    },

    {
      question: "What is the smallest country in the world?",
      answer: "Vatican City",
    },

    {
      question: "Who was the first emperor of China?",
      answer: "Qin Shi Huang",
    },

    {
      question: "What is the capital of Turkey?",
      answer: "Ankara",
    },

    {
      question: "Who wrote 'Les Misérables'?",
      answer: "Victor Hugo",
    },

    {
      question: "What is the longest river in North America?",
      answer: "Missouri River",
    },

    {
      question: "Who is the author of 'The Picture of Dorian Gray'?",
      answer: "Oscar Wilde",
    },

    {
      question: "Which country is known as 'the land of a thousand hills'?",
      answer: "Rwanda",
    },

    {
      question: "Who was the first person to orbit the Earth?",
      answer: "Yuri Gagarin",
    },

    {
      question: "What is the capital of Argentina?",
      answer: "Buenos Aires",
    },

    {
      question: "Who wrote 'The Count of Monte Cristo'?",
      answer: "Alexandre Dumas",
    },

    {
      question: "What is the longest river in South America?",
      answer: "Amazon River",
    },

    {
      question: "Who was the author of 'The Odyssey'?",
      answer: "Homer",
    },

    {
      question: "Which country is known as 'the land of the midnight sun'?",
      answer: "Norway",
    },
    // Agrega más preguntas según sea necesario
  ];

  // Seleccionar aleatoriamente una pregunta de la lista
  const preguntaAleatoria =
    preguntas[Math.floor(Math.random() * preguntas.length)];
  const question = preguntaAleatoria.question;
  const respuestaCorrecta = preguntaAleatoria.answer;

  // Preguntar al jugador y obtener la respuesta
  const respuestaJugador = prompt(question);

  // Comprobar si la respuesta del jugador es correcta
  if (
    respuestaJugador &&
    respuestaJugador.toLowerCase() === respuestaCorrecta.toLowerCase()
  ) {
    // Incrementar los puntos del jugador
    // Generar un número aleatorio entre 1 y 100
    const sumaAleatoria = Math.floor(Math.random() * 100) + 1;

    // Mostrar un mensaje de éxito al jugador con el número aleatorio
    alert("Your random score is: " + sumaAleatoria);
  } else {
    // Mostrar un mensaje si la respuesta es incorrecta
    alert(
      "Incorrect answer. Minus 5 points. The correct answer is: " +
        respuestaCorrecta
    );
  }
}

function calcMachineOption() {
  const number = Math.floor(Math.random() * 3);
  switch (number) {
    case 0:
      return ROCK;
    case 1:
      return PAPER;
    case 2:
      return SCISSORS;
  }
}

function calcResult(userOption, machineOption) {
  if (userOption === machineOption) {
    return TIE;
  } else if (userOption === ROCK) {
    if (machineOption === PAPER) return LOST;
    if (machineOption === SCISSORS) return WIN;
  } else if (userOption === PAPER) {
    if (machineOption === SCISSORS) return LOST;
    if (machineOption === ROCK) return WIN;
  } else if (userOption === SCISSORS) {
    if (machineOption === ROCK) return LOST;
    if (machineOption === PAPER) return WIN;
  }
}
