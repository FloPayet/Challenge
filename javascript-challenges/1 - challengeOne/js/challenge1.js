let question = [
    { question: "Quelle est la capital de la France", options: ["Paris", "London", "Madrid"], answer: 0}, 
    { question: "Quelle est la capital de la Espagne", options: ["Paris", "London", "Madrid"], answer: 2}, 
    { question: "Quelle est la capital de la Italie", options: ["Paris", "Rome", "Madrid"], answer: 1}, 
    { question: "Quelle est la capital de la Angleterre", options: ["London", "Washigton", "Paris"], answer: 0}, 
    { question: "Quelle est la capital de la Mexique", options: ["Mexico", "London", "Madrid"], answer: 0}, 
    { question: "Quelle est la capital de la USA", options: ["Paris", "London", "Washigton"], answer: 2}     
];

let score = 0;
let i = 0;
console.log(question);
while (question[i]) {
    let user_answer = prompt(`${question[i].question} \n 0- ${question[i].options[0]} \n 1- ${question[i].options[1]} \n 2- ${question[i].options[2]}`);
    if (user_answer == question[i].answer) {
        alert("Bonne réponse");
        score++;
    }
    else {
        alert("dommage mauvais réponse");
    }
    i++;
}
score = (score/6) * 100;
alert(`Votre score : ${score}%`);