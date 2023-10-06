let word = "java";
let line = setup_line(word);
let wrong = 10;

function setup_line(word) {
    let line = "";
    for (let i = 0; i <= word.length - 1; i++) {
        line += "_" + " ";
    }
    return line;
}

function start() {
    let awnser = "";
    let indice = 0;
    
    alert(line + "\n" + `Erreur : ${wrong} restantes`);
    awnser = prompt("Entrer la lettre que vous voulez" + "\n" + `Erreur : ${wrong} restantes`);
    console.log(line.slice(0) + '\n' + word.slice(0));
    for (let i = 0; word[i]; i++) {
        console.log(word[i]);
        if (word[i] == awnser) {
            line = line.slice(0, i * 2) + word[i] + line.slice((i * 2) + 1);
            indice++;
        }
    }
    if (indice == 0) {
        wrong--;
    }
    start();
}

start();