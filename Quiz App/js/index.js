const quizData = [{
        question: "How old is the world's oldest piece of chewing gum?",
        a: "900",
        b: "400",
        c: "600",
        d: "1000",
        correct: "a",
    },
    {
        question: "Which is the tallest mountain in the world?",
        a: "Mont Blanc",
        b: "Mount Everest",
        c: " Mount Kilimanjaro ",
        d: "Tatry",
        correct: "b",
    },
    {
        question: "Which planet is known as the Red Planet?",
        a: "Mercury",
        b: "Venus",
        c: "Uranus",
        d: "Mars",
        correct: "d",
    },
    {
        question: "Which day is celebrated as World Environment Day?",
        a: "5th June",
        b: "5th September",
        c: "5th May",
        d: "5th January",
        correct: "a",
    },
    {
        question: "Which star is at the centre of our Solar System?",
        a: "San",
        b: "Sunn",
        c: "Sun",
        d: "Sann",
        correct: "c",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "With how many bricks is the Empire State Building made of?",
        a: "11 million",
        b: "8 million",
        c: "10 million",
        d: "6 million",
        correct: "c",
    },
    {
        question: "Where do kiwi fruits originally come from?",
        a: "China",
        b: "Slovakia",
        c: "Germany",
        d: "USA",
        correct: "a",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

};

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
};

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
};

submitBtn.addEventListener("click", () => {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
        <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
        
        <button onclick="location.reload()">Reload</button>
    `;
        }
    }
});