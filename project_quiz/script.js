const fields = [
    {
        'que': 'Which of the following is a markup language ?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JS',
        'd': 'PHP',
        'correct': 'a'
    },
    {
        'que': 'What year was Javascript lanunched ?',
        'a': '1996',
        'b': '1995',
        'c': '1994',
        'd': 'None of the above',
        'correct': 'b'
    },
    {
        'que': 'What does CSS stand for ?',
        'a': 'Hypetext Markup Language',
        'b': 'Cascading StyleSheet',
        'c': 'Javascript',
        'd': 'None of the above',
        'correct': 'b'
    }
]

let index = 0;
let total = fields.length;
let right = 0, wrong = 0;
const quesbox = document.getElementById('quiz');
const optionInput = document.querySelectorAll('.opt');
const loadQuestion = () => {
    if (index == total) {
        return endQuiz();
    }
    reset();
    const data = fields[index];
    quesbox.innerText = ` ${index + 1}) ${data.que}`;
    optionInput[0].nextElementSibling.innerText = data.a;
    optionInput[1].nextElementSibling.innerText = data.b;
    optionInput[2].nextElementSibling.innerText = data.c;
    optionInput[3].nextElementSibling.innerText = data.d;

}
const previousQue= () => {
    if(index > 0){
        index--;
        loadQuestion();
    }
    return;
}

const nextQue = () => {
    if(index < total){
        index++;
      loadQuestion();
    }
    return;
}
const submitQuiz = () => {
    const data = fields[index];
    const ans = getAnswer();
    if (ans == data.correct) {
        right++;
    }
    else {
        wrong++;
    }
    index++;
    loadQuestion();

    return;
}

const getAnswer = () => {
    let answer;
    optionInput.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value;
            }
        })
    return answer;
}
const reset = () => {
    optionInput.forEach(
        (input) => {
            input.checked = false;
        }
    )
}
const endQuiz = () => {
    document.querySelector('.Quiz_box').innerHTML = ` <h2> Thank you for praticipating in the quiz </h2> 
    <h3> <span style="color:steelblue;">${right} / ${total}</span> are correct </h3>`
}

loadQuestion();
