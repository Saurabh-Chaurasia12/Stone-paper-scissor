let youscore = 0;
let compscore = 0;

// let rock = document.querySelector("#rock");
// let paper = document.querySelector("#paper");
// let scissor = document.querySelector("scissor");
let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
// let msg_container = document.querySelector(".msg-container");
let you = document.querySelector("#You");
let comp = document.querySelector("#Comp");

let reset = document.querySelector(".reset");

const genCompChoice = ()=>{
    const array1 = ["rock","paper","scissor"];
    return array1[Math.floor(Math.random()*3)];
};

const showwinnner = (userwin,userChoice,CompChoice)=> {
    if(userwin){
        youscore++;
        you.innerText = youscore;
        msg.innerText = `You Win!!! ${userChoice} beats ${CompChoice}`;
        msg.style.backgroundColor = "#8DB38B";
    }
    else{
        compscore++;
        comp.innerText = compscore;
        msg.innerText = `Comp Win!!! ${CompChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";

    }
};

const drawGame= (userChoice)=>{
    msg.innerText = `Both ${userChoice}, Draw Play again!!!`;
    msg.style.backgroundColor = "blue";
};

const playGame=(userChoice)=>{
    // console.log("User choice is",userChoice);
    let CompChoice = genCompChoice();
    // console.log(userChoice , CompChoice);

    if(userChoice == CompChoice){
        drawGame(userChoice);
    }
    else{
        let userwin = true;
        if(userChoice == "rock"){
            userwin = CompChoice == "scissor" ? true : false ;
        }
        else if (userChoice == "scissor"){
            userwin = CompChoice == "rock" ? false : true ;
        }
        else if (userChoice == "paper"){
            userwin = CompChoice == "scissor" ? false : true ;
        }
        showwinnner(userwin,userChoice,CompChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        msg.innerText = "Play your Move!!"
        // console.log(choice , userChoice);
        playGame(userChoice);
    });
});

reset.onclick = ()=>{
    youscore = 0;
    compscore =0;
    you.innerText = youscore;
    comp.innerText = compscore;
    msg.innerText = "Play Your Move!!!";
    msg.style.backgroundColor = "#8DB38B";
};