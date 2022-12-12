let firstPage = document.querySelector('.firstpage')
let secondPage = document.querySelector('.questionsWithAnswer')
let lastPage = document.querySelector('.nextpage');
let startButton = document.querySelector('.startButton')

startButton.addEventListener('click',()=>{
    firstPage.classList.add('nextpage')
    secondPage.classList.add('block')

})


let allQuestions = [
    {
        question : 'how old are you',
        'a': 23,
        'b':25,
        'c':30,
        'd': 40,
        correct: 'a'
    },
    {
        question : 'what is my name',
        'a': 'karake',
        'b': 'murenzi',
        'c': 'tresor',
        'd': 'muhirwa',
        correct: 'c'
    },
    {
        question : ' what is my favolite game',
        'a': 'foot boll',
        'b': 'basket boll',
        'c': 'teniss',
        'd': 'none of them',
        correct: 'b'
    },
    {
        question : 'what is my birth day',
        'a': '20/June',
        'b': '21/Sct',
        'c': '10/December',
        'd': '17/May',
        correct: 'd'
    },
];


let question = document.querySelector('.question p')
let choices = document.querySelectorAll('.question ul li span')
let radioBox = document.querySelectorAll('.question ul li input')
let nextbutton = document.querySelector('.next')

let questionslevel = 0;
let score = 0;




loadQuiz()

function loadQuiz(){

    uncheckCheckedRadio()
    let currentquestion = allQuestions[questionslevel]

    question.innerText = currentquestion.question 
    choices[0].innerText = currentquestion.a
    choices[1].innerText = currentquestion.b
    choices[2].innerText = currentquestion.c
    choices[3].innerText = currentquestion.d

}



function uncheckCheckedRadio(){
    radioBox.forEach(element => element.checked = false)
}

function selectedBox(){

    let answer;
    radioBox.forEach(element =>{
        if(element.checked){
            answer = element.id
        }
    })
    return answer;
}



nextbutton.addEventListener('click',()=>{

 let answer = selectedBox()
    if(answer){
    if( answer == allQuestions[questionslevel].correct){
        score++
    }
    questionslevel++


    if(questionslevel< allQuestions.length ){
        loadQuiz()
    }

    else{
        secondPage.style.display = 'none'
        lastPage.classList.add('block')
        lastPage.innerText = 'your marks: ' + score+ '/'+ allQuestions.length;

    }

    }

    }
)