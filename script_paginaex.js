function mouseClicar(){
    var a = document.getElementById("area");
    a.innerText = 'Clicou';
    a.style.background = "red";
}

function mouseEntrar(){
    var a = document.getElementById("area");
    a.innerText = "Entrou!";
    a.style.background = "yellow";
}

function mouseSair() {
    var a = document.getElementById("area");
    a.innerText = "Saiu!"
    a,style.background = "purple";
}

document.addEventListener("click", mouseClicar);
document.addEventListener("mouseenter", mouseEntrar);
document.addEventListener("mouseleave", mouseSair);