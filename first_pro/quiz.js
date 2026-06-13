function startQuiz() {
    const quizContainer = document.getElementsByClassName("quiz-container")[0];
    const container = document.getElementsByClassName("container")[0];
    container.style.display = "none";
    quizContainer.style.display = "block";
    const bar = document.getElementById("bar");
    
    
    var score = 0;
    const questions = [
        {
            question: "What is the capital of France?",
            options: ["Berlin", "Madrid", "Paris", "Rome"],
            answer: "Paris"
        },
        {
            question: "What is the largest planet in our solar system?",
            options: ["Earth", "Jupiter", "Mars", "Saturn"],
            answer: "Jupiter"
        },
        {
            question: "Who wrote 'To Kill a Mockingbird'?",
            options: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "F. Scott Fitzgerald"],
            answer: "Harper Lee"
        },
        {
            question: "What is the chemical symbol for water?",
            options: ["H2O", "O2", "CO2", "NaCl"],
            answer: "H2O"
        },
        {
            question: "What is the largest mammal?",
            options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
            answer: "Blue Whale"
        }
        
    ];
    for (let i = 0; i < questions.length; i++) {
        
        const paragraph = document.getElementById("question");
        paragraph.textContent = questions[i].question;
        const numbers_of_questions = document.getElementById("info-question").textContent = `Question ${i + 1} of ${questions.length}`;
        document.querySelector(".options").innerHTML = `
<ul class="option-ul">
${questions[i].options.map(option =>
`<li><button onclick="checkAnswer('${option}', '${questions[i].answer}')" class="option-btn">${option}</button></li>`
).join('')}
</ul>`;

        break; // Show one question at a time
       

    }

    window.checkAnswer = function(selectedOption, correctAnswer) {
        if (selectedOption === correctAnswer) {
            score++;
        }

        const currentQuestionIndex = questions.findIndex(q => q.question === document.getElementById("question").textContent);
        const buttons = document.querySelectorAll(".option-btn");

        buttons.forEach(button => {
            if (button.textContent === correctAnswer) {
                button.style.backgroundColor = "green";
                button.style.color = "white";
            } else if (button.textContent === selectedOption) {
                button.style.backgroundColor = "red";
                button.style.color = "white";
            }
            button.disabled = true;
        });

        setTimeout(() => {
            if (currentQuestionIndex < questions.length - 1) {
                const nextQuestion = questions[currentQuestionIndex + 1];
                document.getElementById("question").textContent = nextQuestion.question;
                document.getElementById("info-question").textContent = `Question ${currentQuestionIndex + 2} of ${questions.length}`;
                const optionsContainer = document.querySelector(".option-ul");
                optionsContainer.innerHTML = nextQuestion.options.map(option => `<li><button onclick="checkAnswer('${option}', '${nextQuestion.answer}')" class="option-btn">${option}</button></li>`).join('');
                const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
                bar.style.width = `${progress}%`;
            } else {
                const result = document.getElementsByClassName("results")[0];
                quizContainer.style.display = "none";
                result.style.display = "block";
                document.getElementById("finalscore").textContent= `Your final score is ${score} out of ${questions.length}`;
                if (score === questions.length) {
                    document.getElementById("evaluation").textContent = "  Excellent!";
                } else if (score >= questions.length / 2) {
                    document.getElementById("evaluation").textContent = "  Good job!";
                } else {
                    document.getElementById("evaluation").textContent = "  Better luck next time!";
                }
            }
        }, 1000);
    }
    function restartQuiz() {
        const quizContainer = document.getElementsByClassName("quiz-container")[0];
        const result = document.getElementsByClassName("results")[0];
        result.style.display = "none";
        quizContainer.style.display = "block";
        score = 0;
        const firstQuestion = questions[0];
        document.getElementById("question").textContent = firstQuestion.question;
        document.getElementById("info-question").textContent = `Question 1 of ${questions.length}`;
        const optionsContainer = document.querySelector(".option-ul");
        optionsContainer.innerHTML = firstQuestion.options.map(option => `<li><button onclick="checkAnswer('${option}', '${firstQuestion.answer}')" class="option-btn
">${option}</button></li>`).join('');

bar.style.width = `0%`;


    }    window.restartQuiz = restartQuiz;
}   


