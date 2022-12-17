const questions = [
    {//0
        'que': '1) Which of the following is a Mark Up language?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JAVA',
        'd': 'C++',
        'correct': 'a',
    },

    {//1
        'que': '2) Which of these is not a Framework of JavaScript?',
        'a': 'ReactJS',
        'b': 'SpringBoot',
        'c': 'NodeJS',
        'd': 'Redux',
        'correct': 'b',
    },

    {//2
        'que': '3) Which language is widely used for AI and ML?',
        'a': 'Java',
        'b': 'C++',
        'c': 'Python',
        'd': 'Ruby',
        'correct': 'c',
    },

    {//3
        'que': '4) What is the correct full-form of NPM?',
        'a': 'New Package Manager',
        'b': 'Node Package Manager',
        'c': 'Non Package Manager',
        'd': 'Next Package Manager',
        'correct': 'b',
    },

    {//4
        'que': '5) What is JQuery?',
        'a': 'Language',
        'b': 'Framework',
        'c': 'API',
        'd': 'Library',
        'correct': 'd',
    }
];

let index = 0, total = questions.length, correct = 0, incorrect = 0;
const quesBox = document.getElementById('quesBox');
const options = document.querySelectorAll('.option');
let prev_ques = document.getElementById('prev');
let next_ques = document.getElementById('next');

loadQuestion();

function loadQuestion(){
    if(index === total){
        return endQuiz();
    }
    resetPresetValues();
    const data = questions[index];
    quesBox.innerHTML = data.que;
    options[0].nextElementSibling.innerHTML = data.a;
    options[1].nextElementSibling.innerHTML = data.b;
    options[2].nextElementSibling.innerHTML = data.c;
    options[3].nextElementSibling.innerHTML = data.d;
    return;
}

function showPrevQues(){
    if(index == 0){
        alert('You are already at the first question');
    }
    else if(index > 0 && index <= total){
        if(index == total){
            index = index- 2;
            const data = questions[index];
            quesBox.innerHTML = data.que;
            options[0].nextElementSibling.innerHTML = data.a;
            options[1].nextElementSibling.innerHTML = data.b;
            options[2].nextElementSibling.innerHTML = data.c;
            options[3].nextElementSibling.innerHTML = data.d;
        }
        else{
            index--;
            const data = questions[index];
            quesBox.innerHTML = data.que;
            options[0].nextElementSibling.innerHTML = data.a;
            options[1].nextElementSibling.innerHTML = data.b;
            options[2].nextElementSibling.innerHTML = data.c;
            options[3].nextElementSibling.innerHTML = data.d;
        }
    }
    return;
}

function showNextQues(){
    if(index < total){
        index++;
        if(index == total){
            alert('You are already at the last question');
        }
        else{
            const data = questions[index];
            quesBox.innerHTML = data.que;
            options[0].nextElementSibling.innerHTML = data.a;
            options[1].nextElementSibling.innerHTML = data.b;
            options[2].nextElementSibling.innerHTML = data.c;
            options[3].nextElementSibling.innerHTML = data.d;
        }  
    }
}

function submitQues(){
    const data = questions[index];
    const ans = getAnswer();
    if(ans != 0){
        if(ans === data.correct){
            correct++;
        }
        else{
            incorrect++;
        }
        index++;
        loadQuestion();
    }
    return;
}

function getAnswer(){//here we are just sending name of the option(a, b, c or d) that the user has selected whether it is correct or not
    let answer = 0, unchecked = 0;
    options.forEach(
        (input)=>{
        if(input.checked){//checked is used to check if we have clicked on a radio button/checkbox
            answer = input.value;
        }
        else{
            unchecked++;
        }
    })
    if(unchecked == 4){
        alert('Please select an option !');
    }
    return answer;
}

function resetPresetValues(){// to reset already set values when user clicks on submit button
    options.forEach((optionSelected)=>{
        optionSelected.checked = false;
    })
    return;
}

function resetAll(){//to reset the test and go back to question 1
    alert('Do you want to reset all the questions?');
    index = 0;
    loadQuestion();
    return;
}

function clearAll(){
    options.forEach((optionSelected)=>{
        optionSelected.checked = false;
    })
    return;
}

let message = document.getElementById('card');
function endQuiz(){//to end the quiz
    prev_ques.style.visibility = 'hidden';
    next_ques.style.visibility = 'hidden';
    message.innerHTML = `Thank you for taking the Quiz <br> Your ${correct} / ${total} questions are Correct !`;
    message.style.display = 'flex';
    message.style.justifyContent = 'center';
    message.style.alignItems = 'center';
    message.style.fontSize = '20px';
    message.style.padding = '20px';
    return;
}