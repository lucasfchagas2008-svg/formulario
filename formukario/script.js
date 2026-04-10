
function alterarFundo(){
    let cor = document.body.style.backgroundColor;
    if (cor ===  "black"){
        document.body.style.backgroundColor = "white";
        document.querySelector('p').style.color = "black";
    }
    else{
        document.body.style.backgroundColor = "black";
        document.querySelector('p').style.color = "white";
    }
}