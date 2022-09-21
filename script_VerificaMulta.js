function verificarMulta() {
    var velocidade = Number(window.document.querySelector("#velocidade").value);
    var txtMulta = window.document.querySelector("#txtResultado");
    txtMulta.innerHTML = `Sua velocidade é de <strong>${velocidade}km/h</strong>.`
    if(velocidade>=60){
        txtMulta.innerHTML = txtMulta.innerHTML + `<br><br><strong>Multado(a)!</strong>`;
    }
    else{
        txtMulta.innerHTML = txtMulta.innerHTML + `<br><br>Obrigado por seguir as leis de trânsito!`;
    }
}