// getting all required elements 
const start_btn = document.querySelector(".start_btn  button"); 
const info_box = document.querySelector(".info_box"); 
const exit_btn = info_box.querySelector(".buttons .quit"); 
const continue_btn = info_box.querySelector(".buttons .restart"); 
const quiz_box = document.querySelector(".quiz_box"); 
const timeCount = quiz_box.querySelector(".timer .timer_sec");

const option_list = document.querySelector(".option_list"); 

// if start quiz button clicked // 
start_btn.oneclick = ()=>{
    info_box.classList.add("activeInfo");
}

// if exit button is clicked // 
exit_btn.oneclick = ()=>{
    info_box.classList.remove("activeInfo");
}

// if continue button is clicked // 
continue_btn.oneclick = ()=>{
    info_box.classList.remove("activeInfo"); // hide the info box
    quiz_box.classList.add("activequiz"); // hide the quiz box 
    showQuestions(3); 
    queCounter(1); 
    startTimer(10); 
}
let que_count = 0;
let que_numb = 1;
let counter; 
let timeValue =15; 

const next_btn = quiz_box.querySelector(".next_btn");

// if next button clicked // 
next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){
        que_count++;
        que_numb++; 
        showQuestions(que_count);
        queCounter(que_numb);
        clearInterval(timeValue);
        startTimer(timeValue);
    } else{ 
        console.log("questions completed");
    }
}




//getting questions and options from array //

function showQuestions(index) {
    const que_text = document.querySelector(".que_text");
    let   que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let  option_tag = '<div class ="option">'+ questions[index].options[0] + '</span></span></div>'
                        + '<div class="option">' + questions[index].options[1] + '<span></span></div>'
                        + '<div class="option">' + questions[index].options[2] + '<span></span></div>'
                        + '<div class="option">' + questions[index].options[3] + '<span></span></div>';

    que_text.innerHTML = que_tag; 
    option_list.innerHTML = que_tag;
    const option = option_list.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
    }  
}

let tickIcon = '<div class="icon tick ><i class="fas fa-check"></i></div>'; 
let crossIcon = '<div class="icon cross"><i class="fas fa-times"></i></div>';



function optionSelected(answer){
    clearInterval(timeValue);
    startTimer(timeValue); 
    let userAns = answer.textContent;
    let CorrectAns = questions[que_count].answer;
    let allOptions = option_list.children.length;
    if(userAns == CorrectAns){
        answer.classList.add("correct");
        console.log("answer is correct"); 
        answer.insertAdjacentHTML("beforeend", tickIcon);
    } else {
        answer.classList.add("incorrect");
        console.log("answer is wrong");
        answer.insertAdjacentHTML("beforeend", crossIcon);
    }

    // select answer automatically 
    for (let i = 0; i < allOptions; i++) {
        if (option_list.children[i].textContent == CorrectAns){
            option_list.children[i].setAttribute("class", "option correct");
            option_list.children[i].insertAdjacentHTML("beforeend", tickIcon); 
        }
    }    
    
}

function queCounter(index){
    const bottom_ques_counter = quiz.box.querySelector(".total_que");
    let totatQuesCountTag = '<span><p> ' + index + '</p>of<p>' + questions.length + '</p>Questions</span>';
    bottom_ques_counter.innerHTML = totalQuesCountTag;

}

// once user selected disabled all options 

for ( let i = 0; i < allOptions; i++) {
    option_list.children[i].classList.add('disabled');
}

function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time;
        
    }
}
