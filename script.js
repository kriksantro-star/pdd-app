function startQuiz() {
    const q = questions[0]; 
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
        btn.onclick = () => alert(index === q.answer ? 'Правильно!' : 'Ошибка!');
        container.appendChild(btn);
    });
}
