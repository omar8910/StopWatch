window.onload = () => {
    comenzar = document.getElementById("start");
    parar = document.getElementById("stop");
    reiniciar = document.getElementById("reset");
    minutos = document.getElementById("minutos");
    segundos = document.getElementById("segundos");
    
    comenzar.addEventListener("click", start);
    parar.addEventListener("click", stop);
    reiniciar.addEventListener("click", reset);

}



function start() {
    var m = 0;
    var s = 0;
    intervalo = setInterval(() =>{
        if(parseInt(segundos.innerHTML) < 9){
            segundos.innerHTML = "0" + s;
        }else if(parseInt(segundos.innerHTML) >= 9){
            segundos.innerHTML = s;
            if(s == 60){
                s = 0;
                segundos.innerHTML = "00";
                if(parseInt(minutos.innerHTML) < 9){
                    m = parseInt(minutos.innerHTML) + 1;
                    minutos.innerHTML = "0" + m;
                }else if(parseInt(minutos.innerHTML) >= 9){
                    m = parseInt(minutos.innerHTML) + 1;
                    minutos.innerHTML = m;
                }
            }
        }
        s++;
    }, 1);

}

function stop() {
    clearInterval(intervalo);
}

function reset() {
    clearInterval(intervalo);
    minutos.innerHTML = "00";
    segundos.innerHTML = "00";
}