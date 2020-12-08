const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");

const correct = document.getElementById("correct");
const wrong = document.getElementById("wrong");

let clickCorrect = () => {

    correct.style.display = "block";
    image1.style.border = "4px solid green";
    
}
let clickWrong = () => {

    wrong.style.display = "block";
    image2.style.border = "4px solid red";
  
}
