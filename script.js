let currentQuestionIndex = 0;

function startQuiz() {
    showQuestion();
}

function showQuestion() {
    const q = questions[currentQuestionIndex];
    document.getElementById('question-text').innerText = q.text;
    document.getElementById('start-btn').style.display = 'none';
    
    const container = document.getElementById('options-container');
    container.innerHTML = ''; 
    
    q.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'btn-sm';
        btn.style.display = 'block';
        btn.style.width = '100%';
        btn.style.margin = '10px 0';
        btn.innerText = opt;
        btn.onclick = () => {
            alert(index === q.answer ? 'Правильно!' : 'Ошибка!');
            nextQuestion();
        };
        container.appendChild(btn);
    });
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        document.getElementById('question-text').innerText = "Тест окончен!";
        document.getElementById('options-container').innerHTML = '';
        document.getElementById('start-btn').style.display = 'block';
        document.getElementById('start-btn').innerText = "Начать заново";
        document.getElementById('start-btn').onclick = () => location.reload();
    }
}
