var startBtn = document.getElementById('startBtn')
var questioncontainer = document.getElementById('questioncontainer')
var questionElement = document.getElementById('question')
var optionsElement = document.getElementById('options')
var feedbackElement = document.getElementById('feedback')
var timerElement = document.getElementById('timer')
var h1tqElement = document.getElementById('h1tq')
var submitButton = document.getElementById('submitInitials');

var currentQuestionIndex = 0;
var score = 0;
var timer = 75;
var timerInterval;

questionElement.style.color = 'grey'
h1tqElement.style.color = 'blue'


var questions = [
    {
        question: "How long is the coding class?",
        options: ["6months", "4months", "7months", "5months"],
        awnser: "6months"
    },
    {
        question: "How rich will i be after the coding class?",
        options: ["10k a year?", "25k a year?", "60k a year", "100k a year?", "none of the above"],
        awnser: "none of the above"
    },
    {
        question: "How many weekly challenges will i pass with a good grade?",
        options: ["6?", "12?", "4?", "16?"],
        awnser: "12?"
    },
    {
        question: "what is more difficult in the coding class?",
        options: ["html?", "css?", "webapi's?", "javascript?"],
        awnser: "javascript?"
    },
    {
        question: "how many people talk in breakout rooms?",
        options: ["6?", "4?", "15?", "3?"],
        awnser: "3?"
    },
    {
        question: "how many hours a week do i get to study since starting my job?",
        options: ["4hrs", "6hrs", "8hrs", "12hrs"],
        awnser: "8hrs"
    },
    {
        question: "how many hours should i be studying?",
        options: ["8hrs", "12hrs", "16hrs", "20hrs"],
        awnser: "2hrs"
    }
]

console.log(questions)

startBtn.addEventListener('click', StartTimedTest);

function StartTimedTest() {
    startBtn.disabled = true;
    startTimer(6);
    showQuestion();
}

function saveScoreToConsole(score, initials) {
    console.log(`Score: ${score}`);
    console.log(`Initials: ${initials}`);
  }

console.log(showQuestion)
function showQuestion() {
    var question = questions[currentQuestionIndex];
    questionElement.textContent = question.question;
    optionsElement.innerHTML = '';

    question.options.forEach(options => {
        var li = document.createElement('li');
        li.textContent = options;
        li.addEventListener('click', () => checkAwnser(options, question.awnser));
        optionsElement.appendChild(li);
    });
}      

function checkAwnser(selectedOption, correctAwnser) {
    if (selectedOption === correctAwnser) {
        score++
        feedbackElement.textContent = 'Hurrah your right!!'
    }   else {
        timer -= 10
        feedbackElement.textContent = "Incorrect!!"
    }

    currentQuestionIndex++

    if (currentQuestionIndex === questions.length) {
        endTimedquiz();
    }   else {
        showQuestion()
    }
}

function endTimedquiz() {
    clearInterval(timerInterval)
    questioncontainer.style.display = 'none'
    feedbackElement.textContent = `Timed Quiz completed! Your score is ${score}/${questions.length}`

    var initialsContainer =document.getElementById('initialsContainer');
    initialsContainer.style.display = 'block'
    submitButton.addEventListener('click', submitInitials);
}

function submitInitials() {

    var initialsInput = document.getElementById('initials');
    var initials = initialsInput.value;

    saveScoreToConsole(score, 'Your Initials');
} 

function startTimer() {
    timerInterval = setInterval(() => {
        timer--
        timerElement.textContent = timer

        if (timer <= 0) {
            endTimedquiz()

        }
    }, 1000)
}



    

                                                                                                                                                                                                                                                                             



